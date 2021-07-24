type Localised<T> = { [locale: string]: T };

export interface Recipe {
    // e.g. { "en" : "Pasta", "zh-CN": 面 }
    titles: Localised<string>;
    // A list of urls
    gallery: string[];
    ingredients: Ingredient[];
    // Optional
    servings?: number;
    instructions: Instruction[];
}

export interface Ingredient {
    names: Localised<string>;
    // e.g. { "gram" : 500, "Sainsbury packs": 1 }
    amount: Localised<number>;
    // e.g. Avocados should be on the darker side
    notes?: Localised<string>;
}

export interface Instruction {
    id: number;
    time?: number;
    text: Localised<InstructionPart[]>;
}

export interface AnnotatedString {
    text: string;
    url?: string;
    tooltip?: string;
}

export type TemperatureUnit = "Degrees" | "Fahrenheit" | "Kelvin";

export interface Temperature {
    unit: TemperatureUnit;
    amount: string;
    convert(to: TemperatureUnit): Temperature;
}

export type TimeUnit = "Second" | "Minute" | "Hour";

export interface Time {
    unit: TimeUnit;
    amount: string;
}

export type InstructionPart = string | AnnotatedString | Temperature | Time
