using System.Text.Json.Serialization;

namespace Potter.Server
{
    public class IntellectualPropertyAsset
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public string Title { get; set; }

        public string Client { get; set; }

        public AssetType Type { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }
    }


    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum AssetType
    {
        Patent,
        TradeMark
    }
}
