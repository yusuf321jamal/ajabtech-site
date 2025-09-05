"use client"

import { motion } from "framer-motion"
import { ShieldCheck, X } from "lucide-react"
import { useState } from "react"

export default function ComplianceFloatingBox() {
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 
                       w-[calc(100vw-1.5rem)] max-w-[280px] sm:max-w-xs 
                       bg-gradient-to-br from-blue-50 via-white to-blue-50/40 
                       backdrop-blur-md shadow-lg rounded-xl border border-blue-100 
                       p-3 sm:p-4 z-50"
        >
            {/* Header with Close button */}
            <div className="flex justify-between items-start sm:items-center mb-2">
                <div className="flex items-start sm:items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-blue-100 flex-shrink-0 mt-0.5 sm:mt-0">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                        AJAB Solutions and Offerings adhere to
                    </h4>
                </div>
                <button
                    onClick={() => setVisible(false)}
                    className="ml-2 text-slate-500 hover:text-slate-700 transition"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* List */}
            <ul className="list-none space-y-1.5 sm:space-y-1 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                <li className="flex items-start sm:items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5 sm:mt-0"></span>
                    <span className="break-words">SDAIA framework – including NDMO</span>
                </li>
                <li className="flex items-start sm:items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5 sm:mt-0"></span>
                    <span className="break-words">DGA's NORA 2.0 framework</span>
                </li>
                <li className="flex items-start sm:items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5 sm:mt-0"></span>
                    <span className="break-words">SIRI (Industry 4.0 Readiness)</span>
                </li>
            </ul>
        </motion.div>
    )
}
