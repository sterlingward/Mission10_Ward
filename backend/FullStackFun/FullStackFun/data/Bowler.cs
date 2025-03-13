namespace FullStackFun.Data
{
    public class Bowler
    {
        public int BowlerID { get; set; }
        public required string BowlerLastName { get; set; }
        public required string BowlerFirstName { get; set; }
        public string? BowlerMiddleInit { get; set; }  // Nullable since middle initials may not exist
        public required string BowlerAddress { get; set; }
        public required string BowlerCity { get; set; }
        public required string BowlerState { get; set; }
        public required string BowlerZip { get; set; }
        public required string BowlerPhoneNumber { get; set; }
        public int TeamID { get; set; }
        public Team? Team { get; set; }  // Nullable to avoid initialization issues
    }
}