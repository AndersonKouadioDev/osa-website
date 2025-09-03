"use client";
import React, { useState, useEffect } from "react";

interface Team {
  id: number;
  name: string;
  mj: number; // matchs joués
  v: number;  // victoires
  n: number;  // nuls
  d: number;  // défaites
  bp: number; // buts pour
  bc: number; // buts contre
  pts: number;
}

const LeagueTable: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "STADE D'ABIDJAN", mj: 30, v: 19, n: 5, d: 6, bp: 45, bc: 24, pts: 62 },
    { id: 2, name: "ASEC MIMOSAS", mj: 30, v: 17, n: 8, d: 5, bp: 52, bc: 27, pts: 59 },
    { id: 3, name: "AFAD PLATEAU", mj: 30, v: 16, n: 7, d: 7, bp: 41, bc: 27, pts: 55 },
    { id: 4, name: "FC SAN PEDRO", mj: 30, v: 14, n: 3, d: 13, bp: 38, bc: 22, pts: 45 },
    { id: 5, name: "STELLA CLUB D'ADJAME", mj: 30, v: 10, n: 12, d: 8, bp: 28, bc: 27, pts: 42 },
    { id: 6, name: "SOA", mj: 30, v: 10, n: 10, d: 10, bp: 30, bc: 30, pts: 40 },
    { id: 7, name: "BOUAKE FC", mj: 30, v: 9, n: 12, d: 9, bp: 25, bc: 27, pts: 39 },
    { id: 8, name: "FC MOUNA", mj: 30, v: 9, n: 11, d: 10, bp: 24, bc: 25, pts: 38 },
    { id: 9, name: "ZOMAN FC", mj: 30, v: 8, n: 13, d: 9, bp: 22, bc: 26, pts: 37 },
    { id: 10, name: "CO KORHOGO", mj: 30, v: 8, n: 12, d: 10, bp: 21, bc: 27, pts: 36 },
    { id: 11, name: "ISCA", mj: 30, v: 9, n: 9, d: 12, bp: 24, bc: 32, pts: 36 },
    { id: 12, name: "RACING CLUB", mj: 30, v: 9, n: 9, d: 12, bp: 23, bc: 32, pts: 36 },
    { id: 13, name: "SOL FC", mj: 30, v: 9, n: 8, d: 13, bp: 26, bc: 33, pts: 35 },
    { id: 14, name: "FC OSA", mj: 30, v: 7, n: 12, d: 11, bp: 20, bc: 30, pts: 33 },
    { id: 15, name: "LYS SASSANDRA FC", mj: 30, v: 6, n: 10, d: 14, bp: 18, bc: 32, pts: 28 },
    { id: 16, name: "AS DENGUELE", mj: 30, v: 6, n: 7, d: 17, bp: 17, bc: 33, pts: 25 },
  ]);

  const [editingTeam, setEditingTeam] = useState<number | null>(null);
  const [sortedTeams, setSortedTeams] = useState<Team[]>([]);

  const sortTeams = (teamsArray: Team[]): Team[] => {
    return [...teamsArray].sort((a, b) => {
      if (a.pts !== b.pts) return b.pts - a.pts;
      const diffA = a.bp - a.bc;
      const diffB = b.bp - b.bc;
      if (diffA !== diffB) return diffB - diffA;
      if (a.bp !== b.bp) return b.bp - a.bp;
      return a.name.localeCompare(b.name);
    });
  };

  useEffect(() => {
    setSortedTeams(sortTeams(teams));
  }, [teams]);

  const calculatePoints = (v: number, n: number): number => v * 3 + n;

  const updateTeam = (teamId: number, field: keyof Team, value: string | number) => {
    setTeams(prevTeams =>
      prevTeams.map(team => {
        if (team.id === teamId) {
          const parsedValue = typeof value === "string" ? parseInt(value) || 0 : value;
          const updatedTeam: Team = { ...team, [field]: parsedValue };

          if (field === "v" || field === "n") {
            updatedTeam.pts = calculatePoints(updatedTeam.v, updatedTeam.n);
            updatedTeam.d = updatedTeam.mj - updatedTeam.v - updatedTeam.n;
          }

          // 🔥 Permet aussi de modifier directement les points
          if (field === "pts") {
            updatedTeam.pts = parsedValue;
          }

          return updatedTeam;
        }
        return team;
      })
    );
  };

  const addTeam = () => {
    const newTeam: Team = {
      id: Math.max(...teams.map(t => t.id)) + 1,
      name: "NOUVELLE EQUIPE",
      mj: 0,
      v: 0,
      n: 0,
      d: 0,
      bp: 0,
      bc: 0,
      pts: 0,
    };
    setTeams([...teams, newTeam]);
  };

  const deleteTeam = (teamId: number) => {
    setTeams(teams.filter(team => team.id !== teamId));
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-purple-700 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">EQUIPES</h1>
          <div className="flex space-x-6 text-sm font-semibold">
            <span className="w-8 text-center">MJ</span>
            <span className="w-8 text-center">V</span>
            <span className="w-8 text-center">N</span>
            <span className="w-8 text-center">D</span>
            <span className="w-8 text-center">BP</span>
            <span className="w-8 text-center">BC</span>
            <span className="w-8 text-center">GA</span>
            <span className="w-8 text-center">PTS</span>
            <span className="w-16 text-center">Actions</span>
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {sortedTeams.map((team, index) => {
          const position = index + 1;
          const ga = team.bp - team.bc;
          const isRelegated = position >= 14;

          return (
            <div
              key={team.id}
              className={`flex items-center px-6 py-3 hover:bg-gray-50 transition-colors ${
                isRelegated ? "bg-yellow-100" : ""
              } ${position <= 3 ? "bg-green-50" : ""}`}
            >
              <div className="w-8 text-center font-bold text-gray-700">
                {position}
              </div>

              <div className="w-8 h-8 mx-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex-1 font-medium text-gray-900">
                {editingTeam === team.id ? (
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => updateTeam(team.id, "name", e.target.value)}
                    onBlur={() => setEditingTeam(null)}
                    onKeyDown={(e) => e.key === "Enter" && setEditingTeam(null)}
                    className="w-full px-2 py-1 border rounded"
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => setEditingTeam(team.id)}
                    className="cursor-pointer hover:text-purple-600"
                  >
                    {team.name}
                  </span>
                )}
              </div>

              {/* Champs éditables */}
              <div className="flex space-x-6 text-sm text-gray-700 font-medium">
                <input
                  type="number"
                  value={team.mj}
                  onChange={(e) => updateTeam(team.id, "mj", e.target.value)}
                  className="w-8 text-center bg-transparent border-b hover:border-gray-300 focus:border-purple-500 focus:outline-none"
                  min="0"
                />

                <input
                  type="number"
                  value={team.v}
                  onChange={(e) => updateTeam(team.id, "v", e.target.value)}
                  className="w-8 text-center bg-transparent border-b hover:border-gray-300 focus:border-purple-500 focus:outline-none"
                  min="0"
                  max={team.mj}
                />

                <input
                  type="number"
                  value={team.n}
                  onChange={(e) => updateTeam(team.id, "n", e.target.value)}
                  className="w-8 text-center bg-transparent border-b hover:border-gray-300 focus:border-purple-500 focus:outline-none"
                  min="0"
                  max={team.mj}
                />

                <div className="w-8 text-center text-gray-600 bg-gray-50 rounded px-1">
                  {team.d}
                </div>

                <input
                  type="number"
                  value={team.bp}
                  onChange={(e) => updateTeam(team.id, "bp", e.target.value)}
                  className="w-8 text-center bg-transparent border-b hover:border-gray-300 focus:border-purple-500 focus:outline-none"
                  min="0"
                />

                <input
                  type="number"
                  value={team.bc}
                  onChange={(e) => updateTeam(team.id, "bc", e.target.value)}
                  className="w-8 text-center bg-transparent border-b hover:border-gray-300 focus:border-purple-500 focus:outline-none"
                  min="0"
                />

                <div
                  className={`w-8 text-center font-medium ${
                    ga > 0
                      ? "text-green-600"
                      : ga < 0
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {ga > 0 ? `+${ga}` : ga}
                </div>

                {/* 🔥 PTS devient éditable */}
                <input
                  type="number"
                  value={team.pts}
                  onChange={(e) => updateTeam(team.id, "pts", e.target.value)}
                  className="w-10 text-center font-bold text-purple-600 bg-purple-50 rounded px-1"
                  min="0"
                />

                <div className="w-16 text-center">
                  <button
                    onClick={() => deleteTeam(team.id)}
                    className="text-red-500 hover:text-red-700 text-xs px-2 py-1 rounded hover:bg-red-50"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t">
        <button
          onClick={addTeam}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm font-medium"
        >
          + Ajouter une équipe
        </button>
      </div>
    </div>
  );
};

export default LeagueTable;
