import { Card, Input, Button, Typography } from "@material-tailwind/react";



export default function Emailverifyform() {
 
  return (
    <Card
      id="loginCard"
      className="backdrop-blur-2xl !text-white p-5 "
      color="transparent"
      shadow={false}
    >
      <Typography className="text-center" variant="h3">
        EMAIL-VERIFY
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w- ">
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            variant="static"
            placeholder="Email"
            className=" !border-t-white text-xl text-center text-white focus:!border-secondary-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Input
            size="lg"
            variant="static"
            placeholder="OTP"
            className=" !border-t-white text-xl text-center text-white focus:!border-secondary-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 bg-secondary-600 text-xl" fullWidth>
          CONFIRM
        </Button>
      </form>
    </Card>
  );
}
