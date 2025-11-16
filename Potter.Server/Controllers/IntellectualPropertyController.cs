using Microsoft.AspNetCore.Mvc;

namespace Potter.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IntellectualPropertyController : ControllerBase
    {
        private readonly ILogger<IntellectualPropertyController> _logger;

        public IntellectualPropertyController(ILogger<IntellectualPropertyController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetIntellectualProperties")]
        public IEnumerable<IntellectualPropertyAsset> Get()
        {
            // return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            // {
            //     Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            //     TemperatureC = Random.Shared.Next(-20, 55),
            //     Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            // })
            // .ToArray();
            return [];
        }
    }
}
