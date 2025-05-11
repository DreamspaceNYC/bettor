export function fetchHistoricalData(league) {
    // Simulate fetching from an API
    console.log(`Fetching historical data for ${league}`);
    return {
        matches: [
            { home: "Team A", away: "Team B", result: "2-1" },
            { home: "Team C", away: "Team D", result: "1-1" },
        ]
    };
}
