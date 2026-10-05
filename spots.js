/* 景点清单。改这个文件就能更新网站，不用碰 index.html。
   英语国家的景点用英文原名；中国、日本的用中文。
   season 选填，用来标注去的季节；不填就留空字符串。
   tier 取 shen / hang / top / ren / npc / la
   （神级 / 夯 / 顶级 / 人上人 / npc / 拉完了） */
window.SPOTS = [
  { "name": "黄岩石窟"                     , "city": "台州"      , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "云冈石窟"                     , "city": "大同"      , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "悬空寺"                       , "city": "大同"      , "season": ""        , "country": "中国"  , "tier": "hang" },
  { "name": "户隐神社"                     , "city": "长野"      , "season": ""        , "country": "日本"  , "tier": "ren" },
  { "name": "金泽城"                       , "city": "金泽"      , "season": ""        , "country": "日本"  , "tier": "top" },
  { "name": "金泽兼六园"                   , "city": "金泽"      , "season": ""        , "country": "日本"  , "tier": "npc" },
  { "name": "河口湖"                       , "city": "富士吉田"  , "season": ""        , "country": "日本"  , "tier": "npc" },
  { "name": "鹤见台"                       , "city": "钏路"      , "season": ""        , "country": "日本"  , "tier": "top" },
  { "name": "阿寒湖"                       , "city": "钏路"      , "season": ""        , "country": "日本"  , "tier": "top" },
  { "name": "Point Reyes National Seashore", "city": "California", "season": ""        , "country": "美国"  , "tier": "top" },
  { "name": "Lake Wanaka"                  , "city": "Wanaka"    , "season": ""        , "country": "新西兰", "tier": "top" },
  { "name": "Lake Pukaki"                  , "city": "Twizel"    , "season": ""        , "country": "新西兰", "tier": "hang" },
  { "name": "Lake Tekapo"                  , "city": "Tekapo"    , "season": ""        , "country": "新西兰", "tier": "shen" },
  { "name": "美瑛的圣诞树与孤独的树"       , "city": "旭川"      , "season": "冬天下雪", "country": "日本"  , "tier": "hang" },
  { "name": "虎跳峡"                       , "city": "丽江"      , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "玉龙雪山"                     , "city": "丽江"      , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "蓝月谷"                       , "city": "丽江"      , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "洱海"                         , "city": "大理"      , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "阿尔山国家公园"               , "city": "阿尔山"    , "season": "秋天"    , "country": "中国"  , "tier": "hang" },
  { "name": "莫尔道嘎公园"                 , "city": "额尔古纳"  , "season": ""        , "country": "中国"  , "tier": "top" },
  { "name": "额尔古纳湿地"                 , "city": "额尔古纳"  , "season": "秋天"    , "country": "中国"  , "tier": "hang" },
  { "name": "Yellowstone National Park"    , "city": "Wyoming"   , "season": ""        , "country": "美国"  , "tier": "shen" },
  { "name": "Grand Canyon National Park"   , "city": "Arizona"   , "season": ""        , "country": "美国"  , "tier": "shen" },
  { "name": "Yosemite National Park"       , "city": "California", "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Death Valley National Park"   , "city": "California", "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Kings Canyon National Park"   , "city": "California", "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Arches National Park"         , "city": "Utah"      , "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Niagara Falls"                , "city": "New York"  , "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Sequoia National Park"        , "city": "California", "season": ""        , "country": "美国"  , "tier": "top" },
  { "name": "Acadia National Park"         , "city": "Maine"     , "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Bryce Canyon National Park"   , "city": "Utah"      , "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Grand Teton National Park"    , "city": "Wyoming"   , "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Monument Valley"              , "city": "Arizona"   , "season": ""        , "country": "美国"  , "tier": "hang" },
  { "name": "Pinnacles National Park"      , "city": "California", "season": ""        , "country": "美国"  , "tier": "ren" },
  { "name": "函馆山"                       , "city": "函馆"      , "season": ""        , "country": "日本"  , "tier": "top" },
  { "name": "上海之鱼"                     , "city": "上海"      , "season": ""        , "country": "中国"  , "tier": "la" },
  { "name": "瘦西湖"                       , "city": "扬州"      , "season": ""        , "country": "中国"  , "tier": "npc" }
];
