export enum CRYPTOS {
  RAYDIUM = "raydium",
  SOLANA = "solana",
  OXYGEN = "oxygen",
  VECHAIN = "vechain",
  EOS = "eos",
  EHTEREUM = "ethereum",
  CHILIZ = "chiliz",
  SERUM = "serum",
  UNISWAP = "uniswap",
  BINANCECOIN = "binancecoin",
  FILECOIN = "filecoin",
  CURVE_DAO_TOKEN = "curve-dao-token",
  BAND_PROTOCOL = "band-protocol",
  LITECOIN = "litecoin",
  CHAINLINK = "chainlink",
  STELLAR = "stellar",
  CONCIERGE_IO = "concierge-io",
  RIPPLE = "ripple"
}

export class Crypto {
  additional_notices = [];
  asset_platform_id: number | null;
  block_time_in_minutes: number;
  categories = [];
  coingecko_rank: number;
  coingecko_score: number;
  community_data: Object;
  community_score: number;
  country_origin: string;
  description: Object;
  developer_data: Object;
  developer_score: number;
  genesis_date: null;
  hashing_algorithm: string | null;
  id: string;
  image: any;
  last_updated: string;
  links: Object;
  liquidity_score: number;
  localization: any;
  market_cap_rank: number;
  market_data: any;
  name: string;
  platforms: Object;
  public_interest_score: number;
  public_interest_stats: Object;
  public_notice: null;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: [];
  symbol: string;
  tickers: [];

  constructor(data: Object) {
    this.additional_notices = data["additional_notices"];
    this.asset_platform_id = data["asset_platform_id"];
    this.block_time_in_minutes = data["block_time_in_minutes"];
    this.categories = data["categories"]
    this.coingecko_rank = data["coingecko_rank"];
    this.coingecko_score = data["coingecko_score"];
    this.community_data = data["community_data"];
    this.community_score = data["community_score"];
    this.country_origin = data["country_origin"];
    this.description = data["description"];
    this.developer_data = data["developer_data"];
    this.developer_score = data["developer_score"];
    this.genesis_date = data["genesis_date"];
    this.hashing_algorithm = data["hashing_algorithm"];
    this.id = data["id"]
    this.image = data["image"];
    this.last_updated = data["last_updated"];
    this.links = data["links"];
    this.liquidity_score = data["liquidity_score"];
    this.localization = data["localization"];
    this.market_cap_rank = data["market_cap_rank"];
    this.market_data = data["market_data"];
    this.name = data["name"];
    this.platforms = data["platforms"];
    this.public_interest_score = data["public_interest_score"];
    this.public_interest_stats = data["public_interest_stats"];
    this.public_notice = data["public_notice"];
    this.sentiment_votes_down_percentage = data["sentiment_votes_down_percentage"];
    this.sentiment_votes_up_percentage = data["sentiment_votes_up_percentage"];
    this.status_updates = data["status_updates"];
    this.symbol = data["symbol"];
    this.tickers = data["tickers"];
  }
}