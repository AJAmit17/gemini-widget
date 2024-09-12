import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Code, Zap } from "lucide-react";
import CopyBtn from "@/components/Copy-btn";
// import Chatbot from "./components/Chatbot";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <a className="flex items-center justify-center" href="#">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-bold">GeminiWidget</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Features
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Documentation
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Empower Your Website with AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Integrate Google Geminis powerful AI capabilities into your
                    website with our simple widget.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Widget Integration</CardTitle>
                      <CardDescription>
                        Copy and paste this tag into your HTML
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* <div className="flex space-x-2">
                        <Input value={widgetTag} readOnly />
                        <Button size="icon" onClick={copyToClipboard}>
                          {copied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div> */}
                      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
                        <code className=" text-white">
                          {`<my-widget"></my-widget>`}
                          <br />
                          {/* {`<script src="${
                            import.meta.env.VITE_WIDGET_URL
                          }/widget.umd.js"></script>`} */}
                          {`<script src="https://gemini-widget.vercel.app/dist/widget.umd.js"></script>`}
                        </code>
                        <CopyBtn
                          text={`<my-widget"></my-widget>\n<script src="https://gemini-widget.vercel.app/dist/widget.umd.js"></script>`}
                        />
                      </div>
                      <div>
                        <h1 className="text-xl font-bold mb-2">
                          Start Collecting Feedback
                        </h1>
                        <p className="text-lg text-secondary-foreground">
                          Embed the code in your site
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <Code className="h-10 w-10 text-primary" />
                  <h2 className="text-xl font-bold">Easy Integration</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Simply copy and paste our widget tag into your HTML. No
                    complex setup required.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <Sparkles className="h-10 w-10 text-primary" />
                  <h2 className="text-xl font-bold">
                    Powered by Google Gemini
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Leverage the advanced AI capabilities of Google Gemini in
                    your applications.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <Zap className="h-10 w-10 text-primary" />
                  <h2 className="text-xl font-bold">Boost User Engagement</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enhance user experience with AI-powered interactions and
                    insights.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 GeminiWidget Inc. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
