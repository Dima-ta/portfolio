"use client";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { skills } from "@/data/skills";

export function SkillsRadar() {
  const data = skills.map(s => ({ subject: s.name, level: s.level }));

  return (
    <div className="h-72 w-full" style={{ aspectRatio: '1 / 1' }}>
      <ResponsiveContainer>
        <RadarChart data={data} className="-mt-4">
          <PolarGrid stroke="#647286ff" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#686d74ff", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar name="Level" dataKey="level" stroke="#621083ff" fill="#ac40c7ff" fillOpacity={0.4} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
