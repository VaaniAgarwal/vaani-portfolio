export default function Skills() {
    const skills = [
        "Python", "Java", "HTML", "CSS", "JavaScript",
        "SQL","MySQL", "PostgreSQL", "OOP",
        "Data Structures", "Software Engineering",
        "WordPress", "Git", "Excel",
        "Data Analysis", "Power BI", "Problem Solving"
    ];
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-4xl font-serif text-goldRoyal mb-4">Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl">
                {skills.map((s,i) => (
                    <div key={i} className="glass-card p-4 text-center text-creamLight">
                        {s}
                    </div>
                ))}
            </div>
        </div>
    );
}