using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace SpectrumAnalyser.Controllers
{
    public class SpectrumGame
    {
        public string Title { get; set; }
        public string Publisher { get; set; }
        public string Genre { get; set; }
        public int ReleaseYear { get; set; }
    }

    public class SpeccyGamesApiController : ApiController
    {
        public IHttpActionResult Get()
        {
            var games = new List<SpectrumGame>()
            {
                new SpectrumGame() { Title = "Treasure Island Dizzy", Publisher = "Codemasters", Genre = "Arcade Adventure", ReleaseYear = 1988}
            };

            return Json(games);
        }
    }
}
