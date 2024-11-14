import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Code,
  Zap,
  Rocket,
  Copy,
  Users,
  Shield,
  Cpu,
} from "lucide-react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Chatbot from "./components/Chatbot";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const widgetCode = `<my-widget api-key="YOUR_GEMINI_API_KEY" api-model="GOOGLE_GEMINI_MODEL"></my-widget>\n<script src="https://gemini-widget.vercel.app/widget.umd.js"></script>`;

  const clickCopy = () => {
    navigator.clipboard.writeText(widgetCode);
    toast.success("Widget Copied to clipboard 🎉");
  };

  const accordionItems = [
    {
      title: "Plain HTML",
      content:
        'For a plain HTML website, add these lines just before the closing </body> tag:\n\n```html\n<my-widget api-key="YOUR_GEMINI_API_KEY" api-model="GOOGLE_GEMINI_MODEL"></my-widget>\n<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>\n<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>\n<script src="https://gemini-widget.vercel.app/widget.umd.js"></script>\n```',
    },
    {
      title: "React",
      content:
        "In a React application:\n1. Create a new component file, e.g., GeminiWidget.js:\n\n ```jsx\nimport React, { useEffect } from 'react';\n\nconst GeminiWidget = () => {\n  useEffect(() => {\n    const script = document.createElement('script');\n    script.src = 'https://gemini-widget.vercel.app/widget.umd.js';\n    script.async = true;\n    document.body.appendChild(script);\n    return () => {\n      document.body.removeChild(script);\n    };\n  }, []);\n\n  return <my-widget api-key=\"YOUR_GEMINI_API_KEY\" api-model=\"GOOGLE_GEMINI_MODEL\"></my-widget>;\n};\n\nexport default GeminiWidget;\n```\n2. Use it in your app:\n```jsx\nimport GeminiWidget from './GeminiWidget';\n\nfunction App() {\n  return (\n    <div>\n      {/* Your other components */}\n      <GeminiWidget />\n    </div>\n  );\n}\n```",
    },
    {
      title: "Next.js",
      content:
        "In a Next.js application:\n1. Create a new component file, e.g., GeminiWidget.js:\n```jsx\nimport { useEffect } from 'react';\n\nconst GeminiWidget = () => {\n  useEffect(() => {\n    const script = document.createElement('script');\n    script.src = 'https://gemini-widget.vercel.app/widget.umd.js';\n    script.async = true;\n    document.body.appendChild(script);\n    return () => {\n      document.body.removeChild(script);\n    };\n  }, []);\n\n  return <my-widget api-key=\"YOUR_GEMINI_API_KEY\" api-model=\"GOOGLE_GEMINI_MODEL\"></my-widget>;\n};\n\nexport default GeminiWidget;\n```\n2. Use it in your pages or components:\n```jsx\nimport dynamic from 'next/dynamic';\n\nconst GeminiWidget = dynamic(() => import('../components/GeminiWidget'), {\n  ssr: false\n});\n\nfunction Home() {\n  return (\n    <div>\n      {/* Your other components */}\n      <GeminiWidget />\n    </div>\n  );\n}\n\nexport default Home;\n```",
    },
    {
      title: "Remix",
      content:
        "In a Remix application:\n1. Create a new component file, e.g., GeminiWidget.js:\n```jsx\nimport { useEffect } from 'react';\n\nconst GeminiWidget = () => {\n  useEffect(() => {\n    const script = document.createElement('script');\n    script.src = 'https://gemini-widget.vercel.app/widget.umd.js';\n    script.async = true;\n    document.body.appendChild(script);\n    return () => {\n      document.body.removeChild(script);\n    };\n  }, []);\n\n  return <my-widget api-key=\"YOUR_GEMINI_API_KEY\" api-model=\"GOOGLE_GEMINI_MODEL\"></my-widget>;\n};\n\nexport default GeminiWidget;\n```\n2. Use it in your routes:\n```jsx\nimport GeminiWidget from './GeminiWidget';\n\nexport default function Index() {\n  return (\n    <div>\n      {/* Your other components */}\n      <GeminiWidget />\n    </div>\n  );\n}\n```",
    },
    {
      title: "Astro",
      content:
        "In an Astro project:\n1. Create a new component file, e.g., GeminiWidget.astro:\n```astro\n---\nimport { useEffect } from 'react';\n\nconst GeminiWidget = () => {\n  useEffect(() => {\n    const script = document.createElement('script');\n    script.src = 'https://gemini-widget.vercel.app/widget.umd.js';\n    script.async = true;\n    document.body.appendChild(script);\n    return () => {\n      document.body.removeChild(script);\n    };\n  }, []);\n\n  return <my-widget api-key=\"YOUR_GEMINI_API_KEY\" api-model=\"GOOGLE_GEMINI_MODEL\"></my-widget>;\n};\n\nexport default GeminiWidget;\n---\n<GeminiWidget />\n```\n2. Use it in your pages:\n```astro\n---\nimport GeminiWidget from '../components/GeminiWidget.astro';\n---\n<html>\n  <body>\n    {/* Your other components */}\n    <GeminiWidget />\n  </body>\n</html>\n```",
    },
    {
      title: "Custom Integration",
      content:
        "If you need help integrating the widget into a different framework or have specific requirements, please contact our support team at support@geminiwidget.com for personalized assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Toaster />
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-12">
          <a className="flex items-center space-x-2" href="#">
            <Sparkles className="h-8 w-8 text-slate-600" />
            <span className="text-2xl font-bold text-slate-800">
              GeminiWidget
            </span>
          </a>
        </header>

        <main>
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-slate-900">
              Add AI Magic to Your Website
            </h1>
            <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto">
              Boost your website with Google Gemini's AI - it's like having a
              super-smart assistant for your visitors!
            </p>
            <Button
              size="lg"
              className="bg-slate-700 rounded-xl hover:bg-slate-800 text-white"
            >
              Check out the Demo <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </section>

          <Card className="mb-16 bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">
                Quick Start Guide
              </CardTitle>
              <CardDescription className="text-slate-600">
                Add our AI widget to your site in just two easy steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4 mb-4 text-slate-700">
                <li>Copy this code:</li>
                <li>
                  Paste it just before the closing <code>&lt;/body&gt;</code>{" "}
                  tag in your HTML file
                </li>
              </ol>
              <div className="bg-slate-100 p-4 rounded-md relative font-mono text-sm">
                <code className="text-slate-800">{widgetCode}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-slate-500 hover:text-slate-700"
                  onClick={clickCopy}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-4 text-slate-600">
                That's it! Your AI assistant is now ready to help your visitors.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="features" className="mb-16">
            <TabsList className="grid w-full grid-cols-2 bg-slate-200 rounded-xl m-4">
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white rounded-xl"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="how-to-use"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white rounded-xl"
              >
                How to Use
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {[
                  {
                    icon: Code,
                    title: "Easy Setup",
                    desc: "No coding skills needed - just copy and paste!",
                  },
                  {
                    icon: Sparkles,
                    title: "AI-Powered Help",
                    desc: "Answers questions like a friendly expert",
                  },
                  {
                    icon: Zap,
                    title: "Super Fast",
                    desc: "Quick responses keep your visitors happy",
                  },
                  {
                    icon: Users,
                    title: "24/7 Support",
                    desc: "Always there to help, even when you're asleep",
                  },
                  {
                    icon: Shield,
                    title: "Safe & Secure",
                    desc: "Your data is protected with top-notch security",
                  },
                  {
                    icon: Cpu,
                    title: "Smart Learning",
                    desc: "Gets better at helping your visitors over time",
                  },
                ].map((feature, index) => (
                  <Card key={index} className="bg-white shadow-sm">
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-slate-600 mb-2" />
                      <CardTitle className="text-lg text-slate-800">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="how-to-use">
              <ScrollArea className="h-[400px] mt-6 pr-4">
                <Accordion type="single" collapsible className="w-full">
                  {accordionItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-slate-800">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {item.content}
                        </ReactMarkdown>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="mt-16 text-center text-slate-500">
          <p>© 2024 GeminiWidget Inc. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
          </div>
        </footer>
      </div>
      {/* <Chatbot />/ */}
    </div>
  );
}

export default App;