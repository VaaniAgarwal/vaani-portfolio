export default function Projects() {
    const projects = [
        "Smart Health Risk Prediction Dashboard",
        "Visual Product Matcher",
        "AI Chatbot (JS)",
        "Login Automation (Python + Selenium)",
        "File Integrity Checker",
        "Task Manager FX",
    ];
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-4xl font-serif text-goldRoyal mb-4">Projects</h1>
            <div className="space-y-4 max-w-2xl">
                {projects.map((p, i) => (
                    <div key={i} className="glass-card p-4 text-creamLight">
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
}