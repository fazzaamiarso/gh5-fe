import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginCard() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="flex bg-destructive-foreground">
          <TabsTrigger className="w-full shadow-none" value="account">
            Netizen
          </TabsTrigger>
          <TabsTrigger className="w-full" value="password">
            Lawyer
          </TabsTrigger>
        </TabsList>
        <TabsContent className="rounded-none" value="account">
          <Card className="rounded-none border-none shadow-none">
            <CardHeader>
              <div className="flex">
                <div>
                  <CardTitle>Client</CardTitle>
                  <CardDescription>
                    Login to request for lawyers help
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@babayo" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input id="password" defaultValue="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className="rounded-none border-none shadow-none">
            <CardHeader>
              <CardTitle>Lawyer</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Username</Label>
                <Input id="current" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">sign in as lawyer</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
