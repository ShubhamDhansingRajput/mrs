import { FunctionComponent } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { IoCodeSlash } from "react-icons/io5";

interface ServiceProps {
    
}
 
const Service: FunctionComponent<ServiceProps> = () => {
    return (  <>
    <div className=" text-center  py-20">
        <h2>Services Provided By Us</h2>
      <div className="  relative   flex items-center mt-24 justify-center flex-wrap gap-5">
      <div className=" absolute top-1/2 left-1/3 z-0   blur-2xl dark:blur-[80px]  dark:opacity-50  opacity-50  bg-gradient-to-r from-cyan-400 to-blue-500 w-56 h-56 rounded-full"/> 
        <div className=" absolute top-[0%] left-[54%] z-0   blur-2xl dark:blur-[80px]  dark:opacity-50   opacity-50   bg-gradient-to-r from-cyan-400 to-blue-500 w-56 h-56 rounded-full"/> 
        <Card className="  flex items-center flex-col justify-center gap-5 w-[250px] h-[250px] p-3 py-8 bg-background/80 z-50 backdrop-blur-md border-cyan-800/20">
            <CardTitle className=" text-lg font-medium flex items-center">
            <IoCodeSlash /> Web Development
            </CardTitle>
            
            <CardFooter className=" text-center justify-center items-center flex">
                <Button>Get Started</Button>
            </CardFooter>
        </Card>

        <Card className=" w-[250px] h-[250px] p-3 py-8 bg-background/80 z-50 backdrop-blur-md border-cyan-800/20 shadow-md">
            <CardTitle className=" text-lg font-medium">
                Web Development
            </CardTitle>
            <CardContent>
                asch
            </CardContent>
        </Card>

        <Card className=" w-[250px] h-[250px] p-3 py-8 bg-background/80 z-50 backdrop-blur-md border-cyan-800/20">
            <CardTitle className=" text-lg font-normal">
                Web Development
            </CardTitle>
            <CardContent>
                asch
            </CardContent>
        </Card>
      </div>

    </div>
    </>);
}
 
export default Service;