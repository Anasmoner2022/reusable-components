import Button from "./components/Button"
import { ChevronRight, Mail, Terminal } from "lucide-react"

import Header from "./components/Header"
import { Alert, AlertDescription, AlertTitle } from "./components/Alert";
const App = () => {
  
  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];



  const handleClick = () => {
    alert("Button clicked!")
  }



  return (
    <div className="p-8 text-center font-mono text-lg font-bold">
      <div className="flex flex-wrap gap-4 p-[10em] my-[10em] h-fulld bg-white ">
        <Button variant="primary" onClick={handleClick}>Primary Button</Button>

        <Button variant="secondary">Secondary Button</Button>

        <Button variant="destructive">Destructive Button</Button>

        <Button variant="outline">Outline Button</Button>

        <Button variant="ghost">Ghost Button</Button>

        <Button variant="link">Link Button</Button>

        <Button icon={<Mail size={24} />}>
        </Button>

        <Button variant="withIcon">
          <ChevronRight size={24} />
          Next
        </Button>

        <Button loading="true">
        </Button>

        <Button variant="primary" size="small">Small Button</Button>

        <Button variant="secondary">Medium Button</Button>

        <Button variant="destructive" size="large">Large Button</Button>

        <Button variant="primary" size="large" disabled="true">disabled Button</Button>

      </div>
      <div className="flex flex-wrap gap-4 py-6 h-screen w-full">
        <Header
          logoSrc="/logo.svg"
          logoAlt="Anas Moner"
          navItems={navItems}
          buttonLabel="Contact"
          onButtonClick={handleClick}
        />
      </div>
      <div className="">
        <Alert type="error">
          <Terminal size={24} />
          <AlertTitle>
            Message
          </AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sed ab voluptas sunt totam eos assumenda quia eum doloremque, perferendis, dignissimos, provident nesciunt repellendus quaerat repellat beatae? In, delectus cupiditate!
          </AlertDescription>
        </Alert>
      </div>
    </div>
    
  )
}

export default App