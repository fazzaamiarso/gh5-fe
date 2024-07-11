/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z1GCQPtizhz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CpuIcon className="w-6 h-6" />
            <h1 className="text-xl font-bold">AI Prompt Generator</h1>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <span>GPT-3</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <CpuIcon className="w-4 h-4 mr-2" />
                  GPT-3
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CpuIcon className="w-4 h-4 mr-2" />
                  GPT-4
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CpuIcon className="w-4 h-4 mr-2" />
                  DALL-E
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">
              <SettingsIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <div className="container mx-auto py-8 px-6 max-w-3xl">
          <div className="bg-card rounded-lg shadow-md p-6">
            <div className="mb-6">
              <Textarea
                placeholder="Enter your prompt..."
                className="w-full rounded-lg border-2 border-input p-4 text-lg focus:border-primary focus:ring-1 focus:ring-primary"
                rows={3}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Previous Prompts</h2>
                <Button variant="ghost" size="icon">
                  <PlusIcon className="w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Describe a cozy winter cabin in the mountains
                    </CardTitle>
                    <CardDescription>
                      Generate a detailed description of a cozy winter cabin
                      nestled in the mountains, including the exterior,
                      interior, and surrounding landscape.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <CopyIcon className="w-4 h-4" />
                      <span className="sr-only">Copy prompt</span>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Write a short story about a robot learning to feel
                      emotions
                    </CardTitle>
                    <CardDescription>
                      Craft a compelling short story about a robot that is
                      programmed to be emotionless, but slowly begins to develop
                      human-like emotions and struggles to understand them.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <CopyIcon className="w-4 h-4" />
                      <span className="sr-only">Copy prompt</span>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Describe a futuristic city with flying cars and advanced
                      technology
                    </CardTitle>
                    <CardDescription>
                      Paint a vivid picture of a futuristic city with flying
                      cars, holographic displays, and other advanced
                      technological marvels that have transformed the urban
                      landscape.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <CopyIcon className="w-4 h-4" />
                      <span className="sr-only">Copy prompt</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
