import { useState } from "react";
import { GetThemeValues } from './ContextTheme';
export default function Toggle() {
    const [enabled, setEnabled] = useState(false);
    const {themeHandler} = GetThemeValues();

    return (
        <div className="relative flex flex-col  justify-center overflow-hidden">
            <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                            themeHandler;
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-purple-400  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-700"
                    ></div>
                </label>
            </div>
        </div>
    );
}