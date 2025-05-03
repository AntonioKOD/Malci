"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, Info } from "lucide-react"

interface CostCalculatorProps {
  title?: string
  description?: string
}

export default function CostCalculator({
  title = "Project Cost Calculator",
  description = "Get a rough estimate for your paving or masonry project.",
}: CostCalculatorProps) {
  const [projectType, setProjectType] = useState("driveway")
  const [area, setArea] = useState(500)
  const [material, setMaterial] = useState("asphalt")
  const [complexity, setComplexity] = useState("standard")
  const [estimatedCost, setEstimatedCost] = useState({ min: 0, max: 0 })

  // Base rates per square foot (in dollars)
  const baseRates = {
    driveway: {
      asphalt: { min: 7, max: 13 },
      concrete: { min: 10, max: 20 },
      pavers: { min: 15, max: 30 },
    },
    patio: {
      concrete: { min: 12, max: 22 },
      pavers: { min: 18, max: 35 },
      natural_stone: { min: 25, max: 50 },
    },
    walkway: {
      concrete: { min: 10, max: 18 },
      pavers: { min: 15, max: 28 },
      natural_stone: { min: 20, max: 40 },
    },
    retaining_wall: {
      concrete_block: { min: 30, max: 50 }, // per linear foot
      natural_stone: { min: 40, max: 80 }, // per linear foot
      brick: { min: 35, max: 60 }, // per linear foot
    },
  }

  // Complexity multipliers
  const complexityMultipliers = {
    simple: 0.8,
    standard: 1.0,
    complex: 1.3,
  }

  // Calculate estimated cost
  useEffect(() => {
    let baseRate = { min: 0, max: 0 }

    // Get the appropriate base rate
    if (projectType in baseRates && material in baseRates[projectType as keyof typeof baseRates]) {
      baseRate =
        baseRates[projectType as keyof typeof baseRates][material as keyof (typeof baseRates)[keyof typeof baseRates]]
    }

    // Apply complexity multiplier
    const multiplier = complexityMultipliers[complexity as keyof typeof complexityMultipliers]

    // Calculate cost
    let minCost = baseRate.min * area * multiplier
    let maxCost = baseRate.max * area * multiplier

    // Round to nearest hundred
    minCost = Math.round(minCost / 100) * 100
    maxCost = Math.round(maxCost / 100) * 100

    setEstimatedCost({ min: minCost, max: maxCost })
  }, [projectType, area, material, complexity])

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-100 dark:border-slate-700">
      <div className="flex items-center mb-4">
        <Calculator className="text-blue-600 dark:text-blue-500 mr-2" size={24} />
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{description}</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => {
              setProjectType(e.target.value)
              // Reset material when project type changes
              if (e.target.value === "retaining_wall") {
                setMaterial("concrete_block")
              } else {
                setMaterial(
                  e.target.value === "driveway" ? "asphalt" : e.target.value === "patio" ? "concrete" : "concrete",
                )
              }
            }}
            className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
          >
            <option value="driveway">Driveway</option>
            <option value="patio">Patio</option>
            <option value="walkway">Walkway</option>
            <option value="retaining_wall">Retaining Wall</option>
          </select>
        </div>

        {projectType !== "retaining_wall" ? (
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Area (Square Feet)
              <span className="ml-1 text-slate-500 dark:text-slate-400 text-xs">
                {projectType === "driveway"
                  ? "(Typical driveway: 500-1000 sq ft)"
                  : projectType === "patio"
                    ? "(Typical patio: 200-500 sq ft)"
                    : "(Typical walkway: 100-300 sq ft)"}
              </span>
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={50}
                max={projectType === "driveway" ? 2000 : projectType === "patio" ? 1000 : 500}
                step={10}
                value={area}
                onChange={(e) => setArea(Number.parseInt(e.target.value))}
                className="flex-grow"
              />
              <input
                type="number"
                min={50}
                max={projectType === "driveway" ? 2000 : projectType === "patio" ? 1000 : 500}
                value={area}
                onChange={(e) => setArea(Number.parseInt(e.target.value) || 0)}
                className="w-24 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Length (Linear Feet)
              <span className="ml-1 text-slate-500 dark:text-slate-400 text-xs">(Typical wall: 20-100 linear ft)</span>
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={area}
                onChange={(e) => setArea(Number.parseInt(e.target.value))}
                className="flex-grow"
              />
              <input
                type="number"
                min={10}
                max={200}
                value={area}
                onChange={(e) => setArea(Number.parseInt(e.target.value) || 0)}
                className="w-24 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Material</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
          >
            {projectType === "driveway" && (
              <>
                <option value="asphalt">Asphalt</option>
                <option value="concrete">Concrete</option>
                <option value="pavers">Pavers</option>
              </>
            )}
            {projectType === "patio" && (
              <>
                <option value="concrete">Concrete</option>
                <option value="pavers">Pavers</option>
                <option value="natural_stone">Natural Stone</option>
              </>
            )}
            {projectType === "walkway" && (
              <>
                <option value="concrete">Concrete</option>
                <option value="pavers">Pavers</option>
                <option value="natural_stone">Natural Stone</option>
              </>
            )}
            {projectType === "retaining_wall" && (
              <>
                <option value="concrete_block">Concrete Block</option>
                <option value="natural_stone">Natural Stone</option>
                <option value="brick">Brick</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Project Complexity
          </label>
          <select
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
            className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
          >
            <option value="simple">Simple (Basic design, flat terrain)</option>
            <option value="standard">Standard (Average complexity)</option>
            <option value="complex">Complex (Custom design, difficult terrain)</option>
          </select>
        </div>

        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-slate-800 dark:text-white">Estimated Cost Range:</h4>
            <div className="flex items-center">
              <Info size={16} className="text-slate-500 dark:text-slate-400 mr-1" />
              <span className="text-xs text-slate-500 dark:text-slate-400">Rough estimate only</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">
            ${estimatedCost.min.toLocaleString()} - ${estimatedCost.max.toLocaleString()}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            This estimate includes materials and labor. Actual costs may vary based on site conditions, material
            availability, and other factors.
          </p>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Request Accurate Quote</Button>
      </div>
    </div>
  )
}
