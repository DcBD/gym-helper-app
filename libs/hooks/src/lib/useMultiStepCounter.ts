import { useState } from "react";

/**
 * Multi step counter.
 * @param min minimum steps value.
 * @param max maximum steps value.
 * @param defaultValue de default steps value
 */
export default function useMultiStepCounter(min: number, max: number, defaultValue = 0) {
    const [step, setStep] = useState<number>(defaultValue);

    const handleSetStep = (newValue: number) => {
        if (newValue > max) {
            setStep(max);
        } else if (newValue < min) {
            setStep(min);
        } else {
            setStep(newValue);
        }
    }

    const next = () => handleSetStep(step + 1);
    const prev = () => handleSetStep(step - 1);

    return [step, next, prev, handleSetStep] as const;
}