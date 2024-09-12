import { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import axios from "axios";
import tailwindStyles from "../index.css?inline";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const { messages, input, handleInputChange } = useChat();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  //@ts-ignore
  const generateAnswer = async (e) => {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer...");

    try {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        { contents: [{ parts: [{ text: input }] }] }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error details:", error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    } finally {
      setGeneratingAnswer(false);
    }
  };

  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="fixed bottom-5 right-5 z-50 widget">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-14 h-14 bg-purple-600 hover:bg-purple-700"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="widget w-80 h-[500px] shadow-lg">
            <style>{tailwindStyles}</style>
            <CardHeader className="bg-purple-600 text-white">
              <CardTitle className="flex justify-between items-center">
                Chatbot
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 widget">
              <style>{tailwindStyles}</style>
              <ScrollArea className="h-[350px] p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 max-w-[80%] ${
                      message.role === "user" ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-purple-100 text-purple-900"
                          : "bg-white text-gray-900 shadow"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t">
              <form onSubmit={generateAnswer} className="flex w-full space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit" disabled={generatingAnswer}>
                  {generatingAnswer ? (
                    <div className="w-5 h-5 border-t-2 border-purple-500 rounded-full animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </CardFooter>
            {answer && (
              <div className="px-4 py-2 border-t text-sm">
                {generatingAnswer ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-ping" />
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-ping delay-75" />
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-ping delay-150" />
                  </div>
                ) : (
                  answer
                )}
              </div>
            )}
          </Card>
        )}
      </div>
    </>
  );
};

export default Chatbot;
