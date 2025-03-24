
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just a placeholder - in a real app, you'd connect to an auth service
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome back to AstroEscrow!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just a placeholder - in a real app, you'd connect to an auth service
    if (email && password) {
      toast({
        title: "Account Created",
        description: "Welcome to AstroEscrow! Your account has been created successfully.",
      });
    } else {
      toast({
        title: "Signup Failed",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
      <Link to="/" className="mb-8 flex items-center gap-2 animate-scale-in">
        <ShieldCheck className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">AstroEscrow</span>
      </Link>

      <Card className="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border/50 animate-fade-in shadow-glow">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-primary/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:ring-primary/50 focus:border-primary/50"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full hover-slide-right">
                  Login
                </Button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button 
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-primary underline px-0 py-0 bg-transparent hover:bg-transparent"
                  >
                    Sign up
                  </button>
                </p>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
                <CardDescription className="text-center">Enter your details to create a new account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input 
                    id="signup-email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-primary/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input 
                    id="signup-password" 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:ring-primary/50 focus:border-primary/50"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full hover-slide-right">
                  Create Account
                </Button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button 
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-primary underline px-0 py-0 bg-transparent hover:bg-transparent"
                  >
                    Login
                  </button>
                </p>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Login;
