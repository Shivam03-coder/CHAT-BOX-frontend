import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function Passwordchangeform() {
  return (
    <Card
      id="loginCard"
      className="backdrop-blur-2xl !text-white p-5"
      color="transparent"
      shadow={false}
    >
      <Typography className="text-center" variant="h3">
        PASSWORD-CHANGE
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-white text-lg text-white focus:!border-secondary-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-3">
            Password
          </Typography>
          <Input
            size="lg"
            placeholder="********"
            className=" !border-t-white text-lg text-white focus:!border-secondary-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 bg-secondary-400 text-xl" fullWidth>
          CONFIRM
        </Button>
      </form>
    </Card>
  );
}
