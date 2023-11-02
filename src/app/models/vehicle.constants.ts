import { VehicleModel } from "./vehicle.model";

  export const vehicleProps: VehicleModel[] = [
    { type: 'Auto', image: './assets/auto.jpg' },
    { type: 'Motor', image: './assets/motor.jpg' },
    { type: 'Scooter', image: './assets/scooter.jpg' }
  ]

  export const vehicleSubtypes: { [key: string]: string[] } = {
    Auto: [
      "Hatchback",
      "Sedan",
      "Station",
      "Cabriolet",
      "Coupé",
      "Multi Purpose Vehicle (MVP)",
      "Terreinauto"
    ],
    Motor: [
      "All-road",
      "Naked",
      "Enduro",
      "Race",
      "Toermotor",
      "Chopper",
      "Zijspan"
    ],
    Scooter: []
  };