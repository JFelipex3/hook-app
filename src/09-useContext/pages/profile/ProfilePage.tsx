import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { use, useContext } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from "@radix-ui/react-label";

export const ProfilePage = () => {

  // Usando el useContext
  //const {user, logout} = useContext(UserContext);

  // Usando API use()
  const {user, logout} = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <Card className="w-full max-w-screen">
        <CardHeader>
          <CardTitle>{user?.name}</CardTitle>
          <CardDescription>{user?.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Acerca de mi: {user?.about}</Label>
                <Label>Skills: {user?.skills.join(" - ")}</Label>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Button variant={"destructive"} onClick={logout}>Salir</Button>
    </div>
  )
}
