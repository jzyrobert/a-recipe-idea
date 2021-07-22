interface Recipe {
    // e.g. { "en" : "Pasta", "zh-CN": 面 }
    titles: Localised<string>;
    // A list of urls
    gallery: string[];
    ingredients: Ingredient[];
    // Optional
    servings?: number;
    instructions: Instruction[];
}

interface Ingredient {
    names: Localised<string>;
    // e.g. { "gram" : 500, "Sainsbury packs": 1 }
    amount: Localised<number>;
    // e.g. Avocados should be on the darker side
    notes?: Localised<string>;
}

interface Instruction {
    id: number;
    time?: number;
    text: Localised<InstructionPart[]>;
}

interface AnnotatedString {
    text: string;
    url?: string;
    tooltip?: string;
}

type TemperatureUnit = "Degrees" | "Fahrenheit" | "Kelvin";

interface Temperature {
    unit: TemperatureUnit;
    amount: string;
    convert(to: TemperatureUnit): Temperature;
}

type TimeUnit = "Second" | "Minute" | "Hour";

interface Time {
    unit: TimeUnit;
    amount: string;
}

type InstructionPart = string | AnnotatedString | Temperature | Time

type Localised<T> = { [locale: string]: T };
