using FullStackFun.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackFun.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BowlersController : ControllerBase
    {
        private readonly BowlingDbContext _db;

        public BowlersController(BowlingDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IEnumerable<Bowler> GetBowlers()
        {
            return _db.Bowlers
                .Include(b => b.Team) // Join Team table
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks") // Filter by Team Name
                .ToList();
        }
    }
}