namespace FullStackFun.Data
{
    public class Team
    {
        public int TeamID { get; set; }
        public required string TeamName { get; set; }
        public List<Bowler>? Bowlers { get; set; } // Nullable to avoid errors
    }
}