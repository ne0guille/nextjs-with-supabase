"use client";
const difficultyIcon = "⭐️";

export const TaskDifficulty = ({ difficulty }: { difficulty: number }) => {
  return (
    <div className="flex items-center">
      <span className="text-xs text-gray-400">
        {difficultyIcon.repeat(difficulty)}
      </span>
    </div>
  );
};
