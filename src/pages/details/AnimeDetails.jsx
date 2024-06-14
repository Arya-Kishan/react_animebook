import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyImage from '../../components/MyImage';

let data = {
    "mal_id": 52991,
    "url": "https:\/\/myanimelist.net\/anime\/52991\/Sousou_no_Frieren",
    "images": {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006l.webp"
        }
    },
    "trailer": {
        "youtube_id": "ZEkwCGJ3o7M",
        "url": "https:\/\/www.youtube.com\/watch?v=ZEkwCGJ3o7M",
        "embed_url": "https:\/\/www.youtube.com\/embed\/ZEkwCGJ3o7M?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
            "image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/default.jpg",
            "small_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/sddefault.jpg",
            "medium_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/mqdefault.jpg",
            "large_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/hqdefault.jpg",
            "maximum_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/maxresdefault.jpg"
        }
    },
    "approved": true,
    "titles": [
        {
            "type": "Default",
            "title": "Sousou no Frieren"
        },
        {
            "type": "Synonym",
            "title": "Frieren at the Funeral"
        },
        {
            "type": "Japanese",
            "title": "\u846c\u9001\u306e\u30d5\u30ea\u30fc\u30ec\u30f3"
        },
        {
            "type": "English",
            "title": "Frieren: Beyond Journey's End"
        }
    ],
    "title": "Sousou no Frieren",
    "title_english": "Frieren: Beyond Journey's End",
    "title_japanese": "\u846c\u9001\u306e\u30d5\u30ea\u30fc\u30ec\u30f3",
    "title_synonyms": [
        "Frieren at the Funeral"
    ],
    "type": "TV",
    "source": "Manga",
    "episodes": 28,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2023-09-29T00:00:00+00:00",
        "to": "2024-03-22T00:00:00+00:00",
        "prop": {
            "from": {
                "day": 29,
                "month": 9,
                "year": 2023
            },
            "to": {
                "day": 22,
                "month": 3,
                "year": 2024
            }
        },
        "string": "Sep 29, 2023 to Mar 22, 2024"
    },
    "duration": "24 min per ep",
    "rating": "PG-13 - Teens 13 or older",
    "score": 9.36,
    "scored_by": 422872,
    "rank": 1,
    "popularity": 252,
    "members": 768941,
    "favorites": 44183,
    "synopsis": "During their decade-long quest to defeat the Demon King, the members of the hero's party\u2014Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren\u2014forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n\n[Written by MAL Rewrite]",
    "background": "Sousou no Frieren was released on Blu-ray and DVD in seven volumes from January 24, 2024, to July 17, 2024.",
    "season": "fall",
    "year": 2023,
    "broadcast": {
        "day": "Fridays",
        "time": "23:00",
        "timezone": "Asia\/Tokyo",
        "string": "Fridays at 23:00 (JST)"
    },
    "producers": [
        {
            "mal_id": 17,
            "type": "anime",
            "name": "Aniplex",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/17\/Aniplex"
        },
        {
            "mal_id": 53,
            "type": "anime",
            "name": "Dentsu",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/53\/Dentsu"
        },
        {
            "mal_id": 62,
            "type": "anime",
            "name": "Shogakukan-Shueisha Productions",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/62\/Shogakukan-Shueisha_Productions"
        },
        {
            "mal_id": 1003,
            "type": "anime",
            "name": "Nippon Television Network",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/1003\/Nippon_Television_Network"
        },
        {
            "mal_id": 1143,
            "type": "anime",
            "name": "TOHO animation",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/1143\/TOHO_animation"
        },
        {
            "mal_id": 1430,
            "type": "anime",
            "name": "Shogakukan",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/1430\/Shogakukan"
        }
    ],
    "licensors": [],
    "studios": [
        {
            "mal_id": 11,
            "type": "anime",
            "name": "Madhouse",
            "url": "https:\/\/myanimelist.net\/anime\/producer\/11\/Madhouse"
        }
    ],
    "genres": [
        {
            "mal_id": 2,
            "type": "anime",
            "name": "Adventure",
            "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
        },
        {
            "mal_id": 8,
            "type": "anime",
            "name": "Drama",
            "url": "https:\/\/myanimelist.net\/anime\/genre\/8\/Drama"
        },
        {
            "mal_id": 10,
            "type": "anime",
            "name": "Fantasy",
            "url": "https:\/\/myanimelist.net\/anime\/genre\/10\/Fantasy"
        }
    ],
    "explicit_genres": [],
    "themes": [],
    "demographics": [
        {
            "mal_id": 27,
            "type": "anime",
            "name": "Shounen",
            "url": "https:\/\/myanimelist.net\/anime\/genre\/27\/Shounen"
        }
    ]
}

let characters = [
    {
        "character": {
            "mal_id": 188176,
            "url": "https:\/\/myanimelist.net\/character\/188176\/Fern",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/519083.jpg?s=b280b410b588ebcd3fd30ac6fad02978"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/519083.webp?s=b280b410b588ebcd3fd30ac6fad02978",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/519083t.webp?s=b280b410b588ebcd3fd30ac6fad02978"
                }
            },
            "name": "Fern"
        },
        "role": "Main",
        "favorites": 2940,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 47097,
                    "url": "https:\/\/myanimelist.net\/people\/47097\/Kana_Ichinose",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70398.jpg?s=01ab90c96ed2a89ebc025b02d8c38893"
                        }
                    },
                    "name": "Ichinose, Kana"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 41966,
                    "url": "https:\/\/myanimelist.net\/people\/41966\/Jill_Harris",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/43821.jpg?s=8610b4cfc43832af5a4693ba65aea62d"
                        }
                    },
                    "name": "Harris, Jill"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 69039,
                    "url": "https:\/\/myanimelist.net\/people\/69039\/Jehanne_Thellier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Thellier, Jehanne"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 55789,
                    "url": "https:\/\/myanimelist.net\/people\/55789\/Maria_Clara_Rosis",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/66916.jpg?s=4992dd15ad8fe003079bee4f3b02c8e5"
                        }
                    },
                    "name": "Rosis, Maria Clara"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 42650,
                    "url": "https:\/\/myanimelist.net\/people\/42650\/Agnese_Marteddu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/46013.jpg?s=f6c96bb2fa5bc12ca95ddbaa89084311"
                        }
                    },
                    "name": "Marteddu, Agnese"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 63795,
                    "url": "https:\/\/myanimelist.net\/people\/63795\/Azucena_Estrada",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/73695.jpg?s=40f919e6402c7748e196e320bdfc1d7b"
                        }
                    },
                    "name": "Estrada, Azucena"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 37649,
                    "url": "https:\/\/myanimelist.net\/people\/37649\/Linda_F\u00f6lster",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/39598.jpg?s=4763fb1111ff7ad2700f2dc77e4b6c77"
                        }
                    },
                    "name": "F\u00f6lster, Linda"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 184947,
            "url": "https:\/\/myanimelist.net\/character\/184947\/Frieren",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/525105.jpg?s=1706604ec2ca141a172526b8dedf3177"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/525105.webp?s=1706604ec2ca141a172526b8dedf3177",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/525105t.webp?s=1706604ec2ca141a172526b8dedf3177"
                }
            },
            "name": "Frieren"
        },
        "role": "Main",
        "favorites": 16416,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 17215,
                    "url": "https:\/\/myanimelist.net\/people\/17215\/Atsumi_Tanezaki",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/77190.jpg?s=ed33c5d429051864f3af3fe2e64eb970"
                        }
                    },
                    "name": "Tanezaki, Atsumi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 35117,
                    "url": "https:\/\/myanimelist.net\/people\/35117\/Mallorie_Rodak",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/40976.jpg?s=5a1f44329cebb84e57d015299e4c7f6c"
                        }
                    },
                    "name": "Rodak, Mallorie"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 21893,
                    "url": "https:\/\/myanimelist.net\/people\/21893\/Marie_Nonnenmacher",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/71214.jpg?s=b5e5e78b6b436cb9fdb6cbbb6cf681bc"
                        }
                    },
                    "name": "Nonnenmacher, Marie"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 53037,
                    "url": "https:\/\/myanimelist.net\/people\/53037\/Jacque_Souza",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/77023.jpg?s=6adb2b1bd856b67e7411e9bb5e203845"
                        }
                    },
                    "name": "Souza, Jacque"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 35767,
                    "url": "https:\/\/myanimelist.net\/people\/35767\/Martina_Felli",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/74407.jpg?s=9bf923e68823fbb869f633484f5dab86"
                        }
                    },
                    "name": "Felli, Martina"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 56690,
                    "url": "https:\/\/myanimelist.net\/people\/56690\/Erika_Ugalde",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/71299.jpg?s=799f4d3249ec390ef3c3117113095efd"
                        }
                    },
                    "name": "Ugalde, Erika"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 40043,
                    "url": "https:\/\/myanimelist.net\/people\/40043\/Julia_Casper",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/40335.jpg?s=b01c2b7858aa1d326cce91eec0d34cc0"
                        }
                    },
                    "name": "Casper, Julia"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 188177,
            "url": "https:\/\/myanimelist.net\/character\/188177\/Stark",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/523292.jpg?s=ea781ce6864ae29a56f5ce3d223d9496"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/523292.webp?s=ea781ce6864ae29a56f5ce3d223d9496",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/523292t.webp?s=ea781ce6864ae29a56f5ce3d223d9496"
                }
            },
            "name": "Stark"
        },
        "role": "Main",
        "favorites": 1519,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 47439,
                    "url": "https:\/\/myanimelist.net\/people\/47439\/Chiaki_Kobayashi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/66505.jpg?s=b8e3db933b88d9d18dd0646526d46973"
                        }
                    },
                    "name": "Kobayashi, Chiaki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 47046,
                    "url": "https:\/\/myanimelist.net\/people\/47046\/Jordan_Dash_Cruz",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/50962.jpg?s=87cea43b9567d828fdfdb015a85c7b5d"
                        }
                    },
                    "name": "Cruz, Jordan Dash"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 20100,
                    "url": "https:\/\/myanimelist.net\/people\/20100\/Arisa_Kiyoto",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/54017.jpg?s=16c30b0399a3c263687fa263befe7be0"
                        }
                    },
                    "name": "Kiyoto, Arisa"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 56907,
                    "url": "https:\/\/myanimelist.net\/people\/56907\/Lucas_Miagusuku",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/77705.jpg?s=a66b69ddc1b52afc9206cac31520f138"
                        }
                    },
                    "name": "Miagusuku, Lucas"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 1613,
                    "url": "https:\/\/myanimelist.net\/people\/1613\/Brigitte_Lecordier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/67476.jpg?s=ff50105bede34513c44198b231e6e6b1"
                        }
                    },
                    "name": "Lecordier, Brigitte"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 42908,
                    "url": "https:\/\/myanimelist.net\/people\/42908\/Tito_Marteddu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/46474.jpg?s=c7724464c1d9a85235ce3d76f4db0613"
                        }
                    },
                    "name": "Marteddu, Tito"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 62748,
                    "url": "https:\/\/myanimelist.net\/people\/62748\/Eduardo_Mart\u00ednez_Torizes",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/73055.jpg?s=33e5d25725c98b2192077050462fb849"
                        }
                    },
                    "name": "Mart\u00ednez Torizes, Eduardo"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 414,
                    "url": "https:\/\/myanimelist.net\/people\/414\/Brittney_Karbowski",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/34809.jpg?s=1c3379b3322880262fca475d33982d5a"
                        }
                    },
                    "name": "Karbowski, Brittney"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 45755,
                    "url": "https:\/\/myanimelist.net\/people\/45755\/Kelyan_Blanc",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/68927.jpg?s=a3835c89ee75766972426bd609e95462"
                        }
                    },
                    "name": "Blanc, Kelyan"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 63072,
                    "url": "https:\/\/myanimelist.net\/people\/63072\/Janek_Sch\u00e4chter",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Sch\u00e4chter, Janek"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 206722,
            "url": "https:\/\/myanimelist.net\/character\/206722\/Aura",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/524719.jpg?s=4048eff20f4b708dcb207e42dcf350a2"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/524719.webp?s=4048eff20f4b708dcb207e42dcf350a2",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/524719t.webp?s=4048eff20f4b708dcb207e42dcf350a2"
                }
            },
            "name": "Aura"
        },
        "role": "Supporting",
        "favorites": 65,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 6996,
                    "url": "https:\/\/myanimelist.net\/people\/6996\/Ayana_Taketatsu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/62976.jpg?s=81072620945f26e15126bededf187c28"
                        }
                    },
                    "name": "Taketatsu, Ayana"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 59414,
                    "url": "https:\/\/myanimelist.net\/people\/59414\/Corey_Pettit",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/70213.jpg?s=418f2cf7645f49455b0ce9d7b6968513"
                        }
                    },
                    "name": "Pettit, Corey"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 9886,
                    "url": "https:\/\/myanimelist.net\/people\/9886\/Nathalie_Bienaim\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/72146.jpg?s=2c8a59ee85f7d3372f0a9076e2c8f2b0"
                        }
                    },
                    "name": "Bienaim\u00e9, Nathalie"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 53045,
                    "url": "https:\/\/myanimelist.net\/people\/53045\/Federica_Russello",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Russello, Federica"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 53380,
                    "url": "https:\/\/myanimelist.net\/people\/53380\/Lu\u00edsa_Horta",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/62706.jpg?s=5eca8452cec1e78c2eba8b41d85a8613"
                        }
                    },
                    "name": "Horta, Lu\u00edsa"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57201,
                    "url": "https:\/\/myanimelist.net\/people\/57201\/Vanessa_Olea",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/69429.jpg?s=c6d968bf5b7766d040b57750f342a0a2"
                        }
                    },
                    "name": "Olea, Vanessa"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 61993,
                    "url": "https:\/\/myanimelist.net\/people\/61993\/Noelia_de_Luis",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "de Luis, Noelia"
                },
                "language": "Spanish"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215341,
            "url": "https:\/\/myanimelist.net\/character\/215341\/Blei",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/538684.jpg?s=b83dd6639d65b46ab3256b061d87e7de"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/538684.webp?s=b83dd6639d65b46ab3256b061d87e7de",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/538684t.webp?s=b83dd6639d65b46ab3256b061d87e7de"
                }
            },
            "name": "Blei"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 10148,
                    "url": "https:\/\/myanimelist.net\/people\/10148\/Shinya_Takahashi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/43051.jpg?s=2a8d583568209564fa6805267685b409"
                        }
                    },
                    "name": "Takahashi, Shinya"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 61694,
                    "url": "https:\/\/myanimelist.net\/people\/61694\/Daniel_Kamui",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/75549.jpg?s=1ad3dc113b61f8da743962efdb8237dc"
                        }
                    },
                    "name": "Kamui, Daniel"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57835,
                    "url": "https:\/\/myanimelist.net\/people\/57835\/Alberto_Franco",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/69240.jpg?s=edc4bb64fb4e9031faec77d57b17341d"
                        }
                    },
                    "name": "Franco, Alberto"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 57496,
                    "url": "https:\/\/myanimelist.net\/people\/57496\/Brent_Mukai",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/68806.jpg?s=40f5457a2bce63b6ac073e0aafaa91e0"
                        }
                    },
                    "name": "Mukai, Brent"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 24293,
                    "url": "https:\/\/myanimelist.net\/people\/24293\/Bruno_M\u00e9y\u00e8re",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/71215.jpg?s=d026f555c1f32ca45dcf372927d6d6d6"
                        }
                    },
                    "name": "M\u00e9y\u00e8re, Bruno"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215302,
            "url": "https:\/\/myanimelist.net\/character\/215302\/Burg",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/541583.jpg?s=c6660924d50b96b013b2f3bb9a94f8f1"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/541583.webp?s=c6660924d50b96b013b2f3bb9a94f8f1",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/541583t.webp?s=c6660924d50b96b013b2f3bb9a94f8f1"
                }
            },
            "name": "Burg"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": []
    },
    {
        "character": {
            "mal_id": 238061,
            "url": "https:\/\/myanimelist.net\/character\/238061\/Chief_of_the_Village_of_the_Sword",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/529122.jpg?s=98882954f80644deaac5e2cc026b79be"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/529122.webp?s=98882954f80644deaac5e2cc026b79be",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/529122t.webp?s=98882954f80644deaac5e2cc026b79be"
                }
            },
            "name": "Chief of the Village of the Sword"
        },
        "role": "Supporting",
        "favorites": 6,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 43279,
                    "url": "https:\/\/myanimelist.net\/people\/43279\/Konomi_Kohara",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70597.jpg?s=9a2528eb116efb4a1c1153e7184e4fb7"
                        }
                    },
                    "name": "Kohara, Konomi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 53057,
                    "url": "https:\/\/myanimelist.net\/people\/53057\/Carolina_Gusev",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Gusev, Carolina"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 70483,
                    "url": "https:\/\/myanimelist.net\/people\/70483\/Julia_Mathilda",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/78405.jpg?s=08f8fee2de5cdff55224fee3e0c47d8d"
                        }
                    },
                    "name": "Mathilda, Julia"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57442,
                    "url": "https:\/\/myanimelist.net\/people\/57442\/Regina_Tiscare\u00f1o",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70679.jpg?s=b3c618bd7b013a7e6b6c34a7883debb9"
                        }
                    },
                    "name": "Tiscare\u00f1o, Regina"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 34855,
                    "url": "https:\/\/myanimelist.net\/people\/34855\/Megan_Shipman",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/43355.jpg?s=f54202c172e8f47ada1a522f9e7ac074"
                        }
                    },
                    "name": "Shipman, Megan"
                },
                "language": "English"
            }
        ]
    },
    {
        "character": {
            "mal_id": 236472,
            "url": "https:\/\/myanimelist.net\/character\/236472\/Demon_Child",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/526131.jpg?s=ab42aa0ef9763ebadc50f84ad5279472"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/526131.webp?s=ab42aa0ef9763ebadc50f84ad5279472",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/526131t.webp?s=ab42aa0ef9763ebadc50f84ad5279472"
                }
            },
            "name": "Demon Child"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 5999,
                    "url": "https:\/\/myanimelist.net\/people\/5999\/Pascale_Chemin",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/71728.jpg?s=1ea0c153ee699a3668f64b8720af4823"
                        }
                    },
                    "name": "Chemin, Pascale"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 22589,
                    "url": "https:\/\/myanimelist.net\/people\/22589\/Lupita_Leal",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/25963.jpg?s=1fa9c097ae8f09f03bf8f4e124468e0b"
                        }
                    },
                    "name": "Leal, Lupita"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 55861,
                    "url": "https:\/\/myanimelist.net\/people\/55861\/Alice_Caffagni",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Caffagni, Alice"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 25719,
                    "url": "https:\/\/myanimelist.net\/people\/25719\/Brittany_Lauda",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/44450.jpg?s=50f592cad38c06139b1411f94b6e70b2"
                        }
                    },
                    "name": "Lauda, Brittany"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 36507,
                    "url": "https:\/\/myanimelist.net\/people\/36507\/Ami_Naitou",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/48004.jpg?s=e3ac02b115084c290abc26a79166b9bd"
                        }
                    },
                    "name": "Naitou, Ami"
                },
                "language": "Japanese"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215250,
            "url": "https:\/\/myanimelist.net\/character\/215250\/Denken",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/6\/538686.jpg?s=2595c67e00559959d93b18367f1c278e"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/6\/538686.webp?s=2595c67e00559959d93b18367f1c278e",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/6\/538686t.webp?s=2595c67e00559959d93b18367f1c278e"
                }
            },
            "name": "Denken"
        },
        "role": "Supporting",
        "favorites": 136,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 7914,
                    "url": "https:\/\/myanimelist.net\/people\/7914\/Jirou_Saitou",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/54843.jpg?s=12693f5d58d1b6cb9979fa8152b3fd9f"
                        }
                    },
                    "name": "Saitou, Jirou"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 35119,
                    "url": "https:\/\/myanimelist.net\/people\/35119\/Ben_Phillips",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/40996.jpg?s=3c41967ac23452061182bec6245c228c"
                        }
                    },
                    "name": "Phillips, Ben"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 39446,
                    "url": "https:\/\/myanimelist.net\/people\/39446\/Mauro_Castro",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/41109.jpg?s=e1c0af28cb115d7f8dc6dc6c0ab1b1d9"
                        }
                    },
                    "name": "Castro, Mauro"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 67730,
                    "url": "https:\/\/myanimelist.net\/people\/67730\/Esteban_Desco",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/76690.jpg?s=906470eec84a1589768688c32c673fdf"
                        }
                    },
                    "name": "Desco, Esteban"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 42640,
                    "url": "https:\/\/myanimelist.net\/people\/42640\/Rodolfo_Bianchi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/46002.jpg?s=ccfd7eb0d8b9bdce36f3d580d74abc0f"
                        }
                    },
                    "name": "Bianchi, Rodolfo"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 55842,
                    "url": "https:\/\/myanimelist.net\/people\/55842\/Herv\u00e9_Bellon",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/66199.jpg?s=e4845c56394c55245d25d96b94a15a31"
                        }
                    },
                    "name": "Bellon, Herv\u00e9"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215255,
            "url": "https:\/\/myanimelist.net\/character\/215255\/Draht",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/524720.jpg?s=59c45b3a7141d2c9d6aadd10bf4fc6e4"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/524720.webp?s=59c45b3a7141d2c9d6aadd10bf4fc6e4",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/524720t.webp?s=59c45b3a7141d2c9d6aadd10bf4fc6e4"
                }
            },
            "name": "Draht"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 55550,
                    "url": "https:\/\/myanimelist.net\/people\/55550\/Kouki_Oosuzu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/75907.jpg?s=d3a9d7265bbe93efe667a4c55b9f7fd8"
                        }
                    },
                    "name": "Oosuzu, Kouki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 62043,
                    "url": "https:\/\/myanimelist.net\/people\/62043\/Kieran_Flitton",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/72501.jpg?s=4f9cfbcb9880e8056d5b5a9f5897dcfd"
                        }
                    },
                    "name": "Flitton, Kieran"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 65890,
                    "url": "https:\/\/myanimelist.net\/people\/65890\/Bruno_Yoshioka",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/75422.jpg?s=13949cad8369356df2efa2de608e15bb"
                        }
                    },
                    "name": "Yoshioka, Bruno"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 42615,
                    "url": "https:\/\/myanimelist.net\/people\/42615\/Andrea_Di_Maggio",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/45969.jpg?s=c177c2389a62c28a2bb413cc769baffa"
                        }
                    },
                    "name": "Di Maggio, Andrea"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 57429,
                    "url": "https:\/\/myanimelist.net\/people\/57429\/Jos\u00e9_\u00c1ngel_Torres",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/68783.jpg?s=4fcb5efc93f8e2b9c52fe137548c9c80"
                        }
                    },
                    "name": "Torres, Jos\u00e9 \u00c1ngel"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 74046,
                    "url": "https:\/\/myanimelist.net\/people\/74046\/Louis_Lecordier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/80255.jpg?s=072cdd93343f7004843d3e2376721af3"
                        }
                    },
                    "name": "Lecordier, Louis"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215304,
            "url": "https:\/\/myanimelist.net\/character\/215304\/D\u00fcnste",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/538691.jpg?s=3df85500b7a4b245497ceb044d935b90"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/538691.webp?s=3df85500b7a4b245497ceb044d935b90",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/538691t.webp?s=3df85500b7a4b245497ceb044d935b90"
                }
            },
            "name": "D\u00fcnste"
        },
        "role": "Supporting",
        "favorites": 3,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 47740,
                    "url": "https:\/\/myanimelist.net\/people\/47740\/Masafumi_Kobatake",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/51920.jpg?s=074334087c7c824adc2b049785679bf8"
                        }
                    },
                    "name": "Kobatake, Masafumi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 72816,
                    "url": "https:\/\/myanimelist.net\/people\/72816\/Leno_Machado",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/79672.jpg?s=0df85b8e3945a894a3806adba9ef8c21"
                        }
                    },
                    "name": "Machado, Leno"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 253,
                    "url": "https:\/\/myanimelist.net\/people\/253\/Christopher_Sabat",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/42874.jpg?s=aef91fd9132c86444be351f412b0cfeb"
                        }
                    },
                    "name": "Sabat, Christopher"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 55993,
                    "url": "https:\/\/myanimelist.net\/people\/55993\/Laurent_Blanpain",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/72175.jpg?s=0b49a781dc67522ff0da376394ec7b6f"
                        }
                    },
                    "name": "Blanpain, Laurent"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 42905,
                    "url": "https:\/\/myanimelist.net\/people\/42905\/Alessandro_Budroni",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/46471.jpg?s=848fca52f00220cf08e68e99d0b4f205"
                        }
                    },
                    "name": "Budroni, Alessandro"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 206724,
            "url": "https:\/\/myanimelist.net\/character\/206724\/Edel",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/538690.jpg?s=03d416c7ce340935d05159d14f3de3ad"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/538690.webp?s=03d416c7ce340935d05159d14f3de3ad",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/538690t.webp?s=03d416c7ce340935d05159d14f3de3ad"
                }
            },
            "name": "Edel"
        },
        "role": "Supporting",
        "favorites": 5,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 11661,
                    "url": "https:\/\/myanimelist.net\/people\/11661\/Tomoyo_Kurosawa",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/75972.jpg?s=b5f31318f64675b488d3eec9bfd71b79"
                        }
                    },
                    "name": "Kurosawa, Tomoyo"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 66759,
                    "url": "https:\/\/myanimelist.net\/people\/66759\/Nia_Celeste",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/80635.jpg?s=6dff77bd17ede6070b68f974b95e171f"
                        }
                    },
                    "name": "Celeste, Nia"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 43343,
                    "url": "https:\/\/myanimelist.net\/people\/43343\/Chiara_Fabiano",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/77105.jpg?s=a50476aecf23bffb0f6b40079eda7912"
                        }
                    },
                    "name": "Fabiano, Chiara"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 59301,
                    "url": "https:\/\/myanimelist.net\/people\/59301\/Stephanie_Filigrana",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/73459.jpg?s=5cbda5b75eb81826b02f8133fba96d8f"
                        }
                    },
                    "name": "Filigrana, Stephanie"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 52952,
                    "url": "https:\/\/myanimelist.net\/people\/52952\/Thaynara_Bergamin",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/67942.jpg?s=f48bcc1489cc78b457169a07e421e2f3"
                        }
                    },
                    "name": "Bergamin, Thaynara"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 9886,
                    "url": "https:\/\/myanimelist.net\/people\/9886\/Nathalie_Bienaim\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/72146.jpg?s=2c8a59ee85f7d3372f0a9076e2c8f2b0"
                        }
                    },
                    "name": "Bienaim\u00e9, Nathalie"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215263,
            "url": "https:\/\/myanimelist.net\/character\/215263\/Ehre",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/531661.jpg?s=0828bb0cd56cf54305a4ba8d01b84e49"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/531661.webp?s=0828bb0cd56cf54305a4ba8d01b84e49",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/531661t.webp?s=0828bb0cd56cf54305a4ba8d01b84e49"
                }
            },
            "name": "Ehre"
        },
        "role": "Supporting",
        "favorites": 7,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 762,
                    "url": "https:\/\/myanimelist.net\/people\/762\/Kanae_Itou",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/57084.jpg?s=3a54acc46d74ca500722a735c295d1d3"
                        }
                    },
                    "name": "Itou, Kanae"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 55769,
                    "url": "https:\/\/myanimelist.net\/people\/55769\/Luiza_Caspary",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/74772.jpg?s=919fd314fb0c41bbda02c2fb14f1485d"
                        }
                    },
                    "name": "Caspary, Luiza"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 47713,
                    "url": "https:\/\/myanimelist.net\/people\/47713\/Jocelyn_Robles",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/51818.jpg?s=9ca15bebc0be168ad6b408d81287a4f4"
                        }
                    },
                    "name": "Robles, Jocelyn"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 1804,
                    "url": "https:\/\/myanimelist.net\/people\/1804\/Trina_Nishimura",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/49124.jpg?s=e991f10a03e1afcb7630a38783f491b2"
                        }
                    },
                    "name": "Nishimura, Trina"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 8066,
                    "url": "https:\/\/myanimelist.net\/people\/8066\/Veronica_Puccio",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/20327.jpg?s=83a19fef87a59b1357568001ec2be68b"
                        }
                    },
                    "name": "Puccio, Veronica"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 55526,
                    "url": "https:\/\/myanimelist.net\/people\/55526\/Lila_Lacombe",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/80659.jpg?s=ec1afe6341af9ce3953a5e215209acdd"
                        }
                    },
                    "name": "Lacombe, Lila"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 196825,
            "url": "https:\/\/myanimelist.net\/character\/196825\/Eisen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/523293.jpg?s=10921d054b41f3e5dd2ab5d6b46e2a2c"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/523293.webp?s=10921d054b41f3e5dd2ab5d6b46e2a2c",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/523293t.webp?s=10921d054b41f3e5dd2ab5d6b46e2a2c"
                }
            },
            "name": "Eisen"
        },
        "role": "Supporting",
        "favorites": 261,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 926,
                    "url": "https:\/\/myanimelist.net\/people\/926\/Youji_Ueda",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/56371.jpg?s=6d26b5c37d25e31c7b1336c9e6303c40"
                        }
                    },
                    "name": "Ueda, Youji"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 21333,
                    "url": "https:\/\/myanimelist.net\/people\/21333\/Chris_Guerrero",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/24441.jpg?s=c61dfda8d58ffa8eb69acdeb9fe67d56"
                        }
                    },
                    "name": "Guerrero, Chris"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 55993,
                    "url": "https:\/\/myanimelist.net\/people\/55993\/Laurent_Blanpain",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/72175.jpg?s=0b49a781dc67522ff0da376394ec7b6f"
                        }
                    },
                    "name": "Blanpain, Laurent"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 43962,
                    "url": "https:\/\/myanimelist.net\/people\/43962\/S\u00e9rgio_Fortuna",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/67941.jpg?s=b64447a7aa8e6d5cd7c5ea703183f4e9"
                        }
                    },
                    "name": "Fortuna, S\u00e9rgio"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 43007,
                    "url": "https:\/\/myanimelist.net\/people\/43007\/Dario_Oppido",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/46501.jpg?s=bdfe5f148f92dd0ea584ccfcb1bb0886"
                        }
                    },
                    "name": "Oppido, Dario"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 62365,
                    "url": "https:\/\/myanimelist.net\/people\/62365\/Ra\u00fal_Solo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/72858.jpg?s=b3f1e037fe7e4c0af2eecc6aafceee6e"
                        }
                    },
                    "name": "Solo, Ra\u00fal"
                },
                "language": "Spanish"
            }
        ]
    },
    {
        "character": {
            "mal_id": 250295,
            "url": "https:\/\/myanimelist.net\/character\/250295\/Exam_Staff",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/552133.jpg?s=d5e4f56aa3d36ed99d71f659a19528f3"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/552133.webp?s=d5e4f56aa3d36ed99d71f659a19528f3",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/552133t.webp?s=d5e4f56aa3d36ed99d71f659a19528f3"
                }
            },
            "name": "Exam Staff"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 47440,
                    "url": "https:\/\/myanimelist.net\/people\/47440\/Takako_Tanaka",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/64932.jpg?s=e07275289ae1afef570854c993a2758b"
                        }
                    },
                    "name": "Tanaka, Takako"
                },
                "language": "Japanese"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215353,
            "url": "https:\/\/myanimelist.net\/character\/215353\/Falsch",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/535534.jpg?s=288c2d33b08269c142f2bde4d53a9be7"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/535534.webp?s=288c2d33b08269c142f2bde4d53a9be7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/535534t.webp?s=288c2d33b08269c142f2bde4d53a9be7"
                }
            },
            "name": "Falsch"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 47698,
                    "url": "https:\/\/myanimelist.net\/people\/47698\/Kento_Shiraishi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/56481.jpg?s=9af2d2cf0cd5ffc31572e913b92e3478"
                        }
                    },
                    "name": "Shiraishi, Kento"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 43663,
                    "url": "https:\/\/myanimelist.net\/people\/43663\/Wallace_Raj",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/74901.jpg?s=938787f812f3badc2c8f5a3e63089dd5"
                        }
                    },
                    "name": "Raj, Wallace"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57328,
                    "url": "https:\/\/myanimelist.net\/people\/57328\/Elliot_Leguizamo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/68503.jpg?s=31c0de70648a278ab1260c46a8268abb"
                        }
                    },
                    "name": "Leguizamo, Elliot"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 33725,
                    "url": "https:\/\/myanimelist.net\/people\/33725\/Taric_Mehani",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/34743.jpg?s=fdd225dbec7bb44720812905811dce2b"
                        }
                    },
                    "name": "Mehani, Taric"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 73765,
                    "url": "https:\/\/myanimelist.net\/people\/73765\/Dio_Garner",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/80049.jpg?s=599b8f42648d20aa0bb388bd9d6946c4"
                        }
                    },
                    "name": "Garner, Dio"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 56285,
                    "url": "https:\/\/myanimelist.net\/people\/56285\/Gabriele_Vender",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/66302.jpg?s=5192125791625e7895ed046f329bfca9"
                        }
                    },
                    "name": "Vender, Gabriele"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 187307,
            "url": "https:\/\/myanimelist.net\/character\/187307\/Flamme",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/528177.jpg?s=8b3a2d8085f11194c19344fe11e9605c"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/528177.webp?s=8b3a2d8085f11194c19344fe11e9605c",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/528177t.webp?s=8b3a2d8085f11194c19344fe11e9605c"
                }
            },
            "name": "Flamme"
        },
        "role": "Supporting",
        "favorites": 245,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 100,
                    "url": "https:\/\/myanimelist.net\/people\/100\/Atsuko_Tanaka",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/63410.jpg?s=927ed8fd86f14dd4f27a71908442e04d"
                        }
                    },
                    "name": "Tanaka, Atsuko"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 5999,
                    "url": "https:\/\/myanimelist.net\/people\/5999\/Pascale_Chemin",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/71728.jpg?s=1ea0c153ee699a3668f64b8720af4823"
                        }
                    },
                    "name": "Chemin, Pascale"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 55773,
                    "url": "https:\/\/myanimelist.net\/people\/55773\/\u00c9rica_Kou",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Kou, \u00c9rica"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 55726,
                    "url": "https:\/\/myanimelist.net\/people\/55726\/Serena_Sigismondo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/66075.jpg?s=127824161814915cc3bfaf25d3ab2e93"
                        }
                    },
                    "name": "Sigismondo, Serena"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 511,
                    "url": "https:\/\/myanimelist.net\/people\/511\/Lydia_Mackay",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/39925.jpg?s=e457c1ab3cfaeac5012edc2acfb9b5f0"
                        }
                    },
                    "name": "Mackay, Lydia"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 40187,
                    "url": "https:\/\/myanimelist.net\/people\/40187\/Jennifer_B\u00f6ttcher",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/41144.jpg?s=14774c91f40b59944f9a8ff1a3b56b1f"
                        }
                    },
                    "name": "B\u00f6ttcher, Jennifer"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215354,
            "url": "https:\/\/myanimelist.net\/character\/215354\/Gabel",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/531109.jpg?s=cc6bc49c9009ebd1f58076f330a8881a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/531109.webp?s=cc6bc49c9009ebd1f58076f330a8881a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/531109t.webp?s=cc6bc49c9009ebd1f58076f330a8881a"
                }
            },
            "name": "Gabel"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 31795,
                    "url": "https:\/\/myanimelist.net\/people\/31795\/Takayuki_Nakatsukasa",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/56771.jpg?s=7f8ae425984bcc6cdb0bf80389f0ef46"
                        }
                    },
                    "name": "Nakatsukasa, Takayuki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 62521,
                    "url": "https:\/\/myanimelist.net\/people\/62521\/Michele_Mancuso",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Mancuso, Michele"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 39332,
                    "url": "https:\/\/myanimelist.net\/people\/39332\/Philippe_Ariotti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/44411.jpg?s=3d2a27b5b55f6aeb2688dd3cab1cf581"
                        }
                    },
                    "name": "Ariotti, Philippe"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 55709,
                    "url": "https:\/\/myanimelist.net\/people\/55709\/Marco_Faustino",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/65311.jpg?s=8627a004129ddf552060a08605e3ca5b"
                        }
                    },
                    "name": "Faustino, Marco"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 5440,
                    "url": "https:\/\/myanimelist.net\/people\/5440\/Sean_Hennigan",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/21593.jpg?s=ee3163c702c3bfbd5a8158a68bcbf0e9"
                        }
                    },
                    "name": "Hennigan, Sean"
                },
                "language": "English"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215261,
            "url": "https:\/\/myanimelist.net\/character\/215261\/Genau",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/537235.jpg?s=bc4d06ed3e396ab82897a5e911fc99f4"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/537235.webp?s=bc4d06ed3e396ab82897a5e911fc99f4",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/7\/537235t.webp?s=bc4d06ed3e396ab82897a5e911fc99f4"
                }
            },
            "name": "Genau"
        },
        "role": "Supporting",
        "favorites": 2,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 7242,
                    "url": "https:\/\/myanimelist.net\/people\/7242\/Tarusuke_Shingaki",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/46442.jpg?s=b3750917bd5f5050df7c8a40275b12d4"
                        }
                    },
                    "name": "Shingaki, Tarusuke"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 52954,
                    "url": "https:\/\/myanimelist.net\/people\/52954\/Rodolfo_Novaes",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/77077.jpg?s=3f6b09de57095c4bdc79b99f9a8da2dd"
                        }
                    },
                    "name": "Novaes, Rodolfo"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 19283,
                    "url": "https:\/\/myanimelist.net\/people\/19283\/Aaron_Roberts",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/42965.jpg?s=2419dbadc45b8cf0fe17e22c7b524d4e"
                        }
                    },
                    "name": "Roberts, Aaron"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 42644,
                    "url": "https:\/\/myanimelist.net\/people\/42644\/Andrea_Lavagnino",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/46009.jpg?s=23c16d7edb8380cac18a539f919db497"
                        }
                    },
                    "name": "Lavagnino, Andrea"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 55500,
                    "url": "https:\/\/myanimelist.net\/people\/55500\/Simon_Herlin",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/70536.jpg?s=4947229bdc80187fab0874aa0fa6a58e"
                        }
                    },
                    "name": "Herlin, Simon"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215257,
            "url": "https:\/\/myanimelist.net\/character\/215257\/Granat",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/525426.jpg?s=4c85add66dff2e7234bf425b86cc7791"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/525426.webp?s=4c85add66dff2e7234bf425b86cc7791",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/525426t.webp?s=4c85add66dff2e7234bf425b86cc7791"
                }
            },
            "name": "Granat"
        },
        "role": "Supporting",
        "favorites": 2,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 7492,
                    "url": "https:\/\/myanimelist.net\/people\/7492\/Shunsuke_Sakuya",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/43188.jpg?s=8d1aa12be326ee62ca858b6f879b2a1b"
                        }
                    },
                    "name": "Sakuya, Shunsuke"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 55993,
                    "url": "https:\/\/myanimelist.net\/people\/55993\/Laurent_Blanpain",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/72175.jpg?s=0b49a781dc67522ff0da376394ec7b6f"
                        }
                    },
                    "name": "Blanpain, Laurent"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 27573,
                    "url": "https:\/\/myanimelist.net\/people\/27573\/Jonas_Falc\u00e3o",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/74126.jpg?s=c641ada910472b62f844ddfc783d7571"
                        }
                    },
                    "name": "Falc\u00e3o, Jonas"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 30133,
                    "url": "https:\/\/myanimelist.net\/people\/30133\/Dimitri_Winter",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/60795.jpg?s=942b93d7669e10fb7fd01f30aecb6992"
                        }
                    },
                    "name": "Winter, Dimitri"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 22163,
                    "url": "https:\/\/myanimelist.net\/people\/22163\/Eduardo_Ram\u00edrez",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/70663.jpg?s=757fd3058a0bf660c2ea385cad249166"
                        }
                    },
                    "name": "Ram\u00edrez, Eduardo"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 251,
                    "url": "https:\/\/myanimelist.net\/people\/251\/John_Burgmeier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/15961.jpg?s=bf1456503e17c34dd414d3e9478fde64"
                        }
                    },
                    "name": "Burgmeier, John"
                },
                "language": "English"
            }
        ]
    },
    {
        "character": {
            "mal_id": 196826,
            "url": "https:\/\/myanimelist.net\/character\/196826\/Heiter",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/523294.jpg?s=5830ad246444e8b775737db4304b6de6"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/523294.webp?s=5830ad246444e8b775737db4304b6de6",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/523294t.webp?s=5830ad246444e8b775737db4304b6de6"
                }
            },
            "name": "Heiter"
        },
        "role": "Supporting",
        "favorites": 194,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 236,
                    "url": "https:\/\/myanimelist.net\/people\/236\/Hiroki_Touchi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/71277.jpg?s=0d22a4ab9540aedefc5277d0a980e4a4"
                        }
                    },
                    "name": "Touchi, Hiroki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 39,
                    "url": "https:\/\/myanimelist.net\/people\/39\/Jason_Douglas",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/37773.jpg?s=cdf3406e16b732c383c3b8ccc1a6fe0c"
                        }
                    },
                    "name": "Douglas, Jason"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 24293,
                    "url": "https:\/\/myanimelist.net\/people\/24293\/Bruno_M\u00e9y\u00e8re",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/71215.jpg?s=d026f555c1f32ca45dcf372927d6d6d6"
                        }
                    },
                    "name": "M\u00e9y\u00e8re, Bruno"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 43794,
                    "url": "https:\/\/myanimelist.net\/people\/43794\/Ettore_Zuim",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/61651.jpg?s=ed3265331c8718314eca5ccae9f6ca5a"
                        }
                    },
                    "name": "Zuim, Ettore"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 781,
                    "url": "https:\/\/myanimelist.net\/people\/781\/Massimo_De_ambrosis",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/834.jpg?s=2d884147bc7d8c9f300a1774e8415862"
                        }
                    },
                    "name": "De ambrosis, Massimo"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 21355,
                    "url": "https:\/\/myanimelist.net\/people\/21355\/Carlo_V\u00e1zquez",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/73460.jpg?s=c594a7171ff6ad7260778482fe685cd5"
                        }
                    },
                    "name": "V\u00e1zquez, Carlo"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 44106,
                    "url": "https:\/\/myanimelist.net\/people\/44106\/Jens_Wendland",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/47626.jpg?s=3754f669b8b168b7471d03e0f76d1d6b"
                        }
                    },
                    "name": "Wendland, Jens"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 236199,
            "url": "https:\/\/myanimelist.net\/character\/236199\/Herbalist",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/525485.jpg?s=fa7df0d93eab405dcbed036f01603b38"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/525485.webp?s=fa7df0d93eab405dcbed036f01603b38",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/525485t.webp?s=fa7df0d93eab405dcbed036f01603b38"
                }
            },
            "name": "Herbalist"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 9886,
                    "url": "https:\/\/myanimelist.net\/people\/9886\/Nathalie_Bienaim\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/72146.jpg?s=2c8a59ee85f7d3372f0a9076e2c8f2b0"
                        }
                    },
                    "name": "Bienaim\u00e9, Nathalie"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 5365,
                    "url": "https:\/\/myanimelist.net\/people\/5365\/Ai_Satou",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/15877.jpg?s=621bd338dece22a357c17b13985867d2"
                        }
                    },
                    "name": "Satou, Ai"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 43654,
                    "url": "https:\/\/myanimelist.net\/people\/43654\/Patr\u00edcia_Scalvi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/67940.jpg?s=41182efab5fdd32b3dcb9272c69f2c85"
                        }
                    },
                    "name": "Scalvi, Patr\u00edcia"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 43930,
                    "url": "https:\/\/myanimelist.net\/people\/43930\/Valeria_Perilli",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/47441.jpg?s=eb96f473b4251ddd19f109696f097632"
                        }
                    },
                    "name": "Perilli, Valeria"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 186854,
            "url": "https:\/\/myanimelist.net\/character\/186854\/Himmel",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/523295.jpg?s=4c35fb5c18a7f9544c077a4526b20512"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/523295.webp?s=4c35fb5c18a7f9544c077a4526b20512",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/523295t.webp?s=4c35fb5c18a7f9544c077a4526b20512"
                }
            },
            "name": "Himmel"
        },
        "role": "Supporting",
        "favorites": 1993,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 270,
                    "url": "https:\/\/myanimelist.net\/people\/270\/Nobuhiko_Okamoto",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/48785.jpg?s=22fe4347c06c07461a12c6bae5687bfb"
                        }
                    },
                    "name": "Okamoto, Nobuhiko"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 25401,
                    "url": "https:\/\/myanimelist.net\/people\/25401\/Clifford_Chapin",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/80353.jpg?s=4e6845c571c3ccbfa5a2d09791ed411d"
                        }
                    },
                    "name": "Chapin, Clifford"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 39332,
                    "url": "https:\/\/myanimelist.net\/people\/39332\/Philippe_Ariotti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/44411.jpg?s=3d2a27b5b55f6aeb2688dd3cab1cf581"
                        }
                    },
                    "name": "Ariotti, Philippe"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 55020,
                    "url": "https:\/\/myanimelist.net\/people\/55020\/Yoann_Borg",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/72010.jpg?s=5deb8bf4f428638ef57c2ac3e45277b3"
                        }
                    },
                    "name": "Borg, Yoann"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 55741,
                    "url": "https:\/\/myanimelist.net\/people\/55741\/Alexander_Vestri",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/79295.jpg?s=e64f584f705ec0d33c76132c08c1f2e7"
                        }
                    },
                    "name": "Vestri, Alexander"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 7351,
                    "url": "https:\/\/myanimelist.net\/people\/7351\/Gilberto_Baroli",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/68375.jpg?s=6bb15185233f293302daaff8ed5e58d6"
                        }
                    },
                    "name": "Baroli, Gilberto"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 20092,
                    "url": "https:\/\/myanimelist.net\/people\/20092\/Manuel_Meli",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/38667.jpg?s=c9f7c081fd4ae857aef8a0f1b8c3c82f"
                        }
                    },
                    "name": "Meli, Manuel"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 44343,
                    "url": "https:\/\/myanimelist.net\/people\/44343\/Miguel_\u00c1ngel_Leal",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/47808.jpg?s=024fa58b11da87371df0bbe641ed3c33"
                        }
                    },
                    "name": "Leal, Miguel \u00c1ngel"
                },
                "language": "Spanish"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215293,
            "url": "https:\/\/myanimelist.net\/character\/215293\/Kanne",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/534108.jpg?s=be4fe511fac0690affc1da8a4d563ce9"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/534108.webp?s=be4fe511fac0690affc1da8a4d563ce9",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/534108t.webp?s=be4fe511fac0690affc1da8a4d563ce9"
                }
            },
            "name": "Kanne"
        },
        "role": "Supporting",
        "favorites": 20,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 36812,
                    "url": "https:\/\/myanimelist.net\/people\/36812\/Azumi_Waki",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/62975.jpg?s=c88912eb30ebff9f97219c5544006ca7"
                        }
                    },
                    "name": "Waki, Azumi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 57031,
                    "url": "https:\/\/myanimelist.net\/people\/57031\/Nina_Medeiros",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/80222.jpg?s=e6ddd543d20a5b970304024d5f80ce86"
                        }
                    },
                    "name": "Medeiros, Nina"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 43260,
                    "url": "https:\/\/myanimelist.net\/people\/43260\/Madeleine_Morris",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/48728.jpg?s=86c29a7f51b82eb0478dc14c37b09fc8"
                        }
                    },
                    "name": "Morris, Madeleine"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 59298,
                    "url": "https:\/\/myanimelist.net\/people\/59298\/Melissa_Hern\u00e1ndez",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70109.jpg?s=a464d989b707add0bea6d1424f05cb6c"
                        }
                    },
                    "name": "Hern\u00e1ndez, Melissa"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 29997,
                    "url": "https:\/\/myanimelist.net\/people\/29997\/Vittoria_Bartolomei",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/38805.jpg?s=b90a553a1fe326013a0bc40e1f001a29"
                        }
                    },
                    "name": "Bartolomei, Vittoria"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 70059,
                    "url": "https:\/\/myanimelist.net\/people\/70059\/Elia_Camine_Robbe",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/78213.jpg?s=f0b5609c8c4872410f4df0e3ad443304"
                        }
                    },
                    "name": "Robbe, Elia Camine"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 206723,
            "url": "https:\/\/myanimelist.net\/character\/206723\/Kraft",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/528420.jpg?s=3c77879b7968b70de981b23bd470a5ee"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/528420.webp?s=3c77879b7968b70de981b23bd470a5ee",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/528420t.webp?s=3c77879b7968b70de981b23bd470a5ee"
                }
            },
            "name": "Kraft"
        },
        "role": "Supporting",
        "favorites": 15,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 160,
                    "url": "https:\/\/myanimelist.net\/people\/160\/Takehito_Koyasu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/63375.jpg?s=76b093ad00fbab48b06778a3da3ec0b1"
                        }
                    },
                    "name": "Koyasu, Takehito"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 5069,
                    "url": "https:\/\/myanimelist.net\/people\/5069\/Hermes_Baroli",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/40317.jpg?s=f867fda4bf80227347fec29628b549e2"
                        }
                    },
                    "name": "Baroli, Hermes"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 1623,
                    "url": "https:\/\/myanimelist.net\/people\/1623\/Damien_Boisseau",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/14605.jpg?s=52e4a8604ec7a199fb8deacd92782026"
                        }
                    },
                    "name": "Boisseau, Damien"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 55751,
                    "url": "https:\/\/myanimelist.net\/people\/55751\/Stefano_Broccoletti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/66100.jpg?s=140cc5aa987badd83b5d3e5dfd012cfd"
                        }
                    },
                    "name": "Broccoletti, Stefano"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 5361,
                    "url": "https:\/\/myanimelist.net\/people\/5361\/Orion_Pitts",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/23483.jpg?s=eecbf2a96b038ab80d234e3e828fa418"
                        }
                    },
                    "name": "Pitts, Orion"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 45936,
                    "url": "https:\/\/myanimelist.net\/people\/45936\/Stefan_Br\u00f6nneke",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/73849.jpg?s=0ee3f1c67949a45d8324591f82bed577"
                        }
                    },
                    "name": "Br\u00f6nneke, Stefan"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215248,
            "url": "https:\/\/myanimelist.net\/character\/215248\/Land",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/541623.jpg?s=241af2e6f17f7325866aaf582ab5037d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/541623.webp?s=241af2e6f17f7325866aaf582ab5037d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/541623t.webp?s=241af2e6f17f7325866aaf582ab5037d"
                }
            },
            "name": "Land"
        },
        "role": "Supporting",
        "favorites": 30,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 46590,
                    "url": "https:\/\/myanimelist.net\/people\/46590\/Shouhei_Komatsu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/50329.jpg?s=be910ae27234b27123291de72b83fc04"
                        }
                    },
                    "name": "Komatsu, Shouhei"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 66429,
                    "url": "https:\/\/myanimelist.net\/people\/66429\/Corey_Wilder",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/75979.jpg?s=07528a243d523b70732b74c2d4d2fa59"
                        }
                    },
                    "name": "Wilder, Corey"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 43646,
                    "url": "https:\/\/myanimelist.net\/people\/43646\/Pedro_Alc\u00e2ntara",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/65999.jpg?s=0116de9bc2d6a5dc7754c3c27c3e3e27"
                        }
                    },
                    "name": "Alc\u00e2ntara, Pedro"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 21839,
                    "url": "https:\/\/myanimelist.net\/people\/21839\/Miguel_\u00c1ngel_Ruiz",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/78291.jpg?s=a7ec03120b4afe6610f702c0daddc8a6"
                        }
                    },
                    "name": "Ruiz, Miguel \u00c1ngel"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 44065,
                    "url": "https:\/\/myanimelist.net\/people\/44065\/Stefano_Sperduti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/69470.jpg?s=825f5add7176e0786298487e3f59c912"
                        }
                    },
                    "name": "Sperduti, Stefano"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 55435,
                    "url": "https:\/\/myanimelist.net\/people\/55435\/Pablo_Cherrey-Iturralde",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/72212.jpg?s=9dc8b96b1bffbbd7d175783925d25fd7"
                        }
                    },
                    "name": "Cherrey-Iturralde, Pablo"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 232166,
            "url": "https:\/\/myanimelist.net\/character\/232166\/Laufen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/533517.jpg?s=ad4488b7e1acdccdbed1a7c17c298a58"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/533517.webp?s=ad4488b7e1acdccdbed1a7c17c298a58",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/533517t.webp?s=ad4488b7e1acdccdbed1a7c17c298a58"
                }
            },
            "name": "Laufen"
        },
        "role": "Supporting",
        "favorites": 21,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 28755,
                    "url": "https:\/\/myanimelist.net\/people\/28755\/Shizuka_Ishigami",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/71494.jpg?s=b71aeb83035632c36daf0ff4981ff9a9"
                        }
                    },
                    "name": "Ishigami, Shizuka"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 53627,
                    "url": "https:\/\/myanimelist.net\/people\/53627\/Marisa_Duran",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/62438.jpg?s=c83a68c32dccbcc0876db7a4db731fa4"
                        }
                    },
                    "name": "Duran, Marisa"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 56856,
                    "url": "https:\/\/myanimelist.net\/people\/56856\/Colombina_Rivas",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Rivas, Colombina"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 31335,
                    "url": "https:\/\/myanimelist.net\/people\/31335\/Mariana_Ortiz",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/32219.jpg?s=56388a04172eb662a43cc3798f5d2fd4"
                        }
                    },
                    "name": "Ortiz, Mariana"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 72153,
                    "url": "https:\/\/myanimelist.net\/people\/72153\/Sara_Giacopello",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Giacopello, Sara"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215295,
            "url": "https:\/\/myanimelist.net\/character\/215295\/Lawine",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/537013.jpg?s=43671c1246de40b213900d9c64da64ef"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/537013.webp?s=43671c1246de40b213900d9c64da64ef",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/537013t.webp?s=43671c1246de40b213900d9c64da64ef"
                }
            },
            "name": "Lawine"
        },
        "role": "Supporting",
        "favorites": 21,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 48122,
                    "url": "https:\/\/myanimelist.net\/people\/48122\/Sayumi_Suzushiro",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/74534.jpg?s=5ba2c06743243e06b8b3c86a602b3f92"
                        }
                    },
                    "name": "Suzushiro, Sayumi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 65304,
                    "url": "https:\/\/myanimelist.net\/people\/65304\/Bruna_Martins",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/74889.jpg?s=525e75dc8116b9a63a9803a967655c2f"
                        }
                    },
                    "name": "Martins, Bruna"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57227,
                    "url": "https:\/\/myanimelist.net\/people\/57227\/Marisol_Hamed",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/68315.jpg?s=dbe2f24c9b579401675398a9ee92cd9c"
                        }
                    },
                    "name": "Hamed, Marisol"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 42689,
                    "url": "https:\/\/myanimelist.net\/people\/42689\/Lucrezia_Marricchi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/46261.jpg?s=d842a49617d0000065b5ac373f4a3f9e"
                        }
                    },
                    "name": "Marricchi, Lucrezia"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 72056,
                    "url": "https:\/\/myanimelist.net\/people\/72056\/Rebecca_Danae",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/79506.jpg?s=027e6fc687950539c71bdfdc645854d7"
                        }
                    },
                    "name": "Danae, Rebecca"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 65564,
                    "url": "https:\/\/myanimelist.net\/people\/65564\/M\u00e9lissa_Berard",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/75741.jpg?s=071636fb636bb97dc372c2e7b3748e66"
                        }
                    },
                    "name": "Berard, M\u00e9lissa"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215275,
            "url": "https:\/\/myanimelist.net\/character\/215275\/Lecker",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/538001.jpg?s=5cb9c8528b5409da387a1c580a8e5201"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/538001.webp?s=5cb9c8528b5409da387a1c580a8e5201",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/8\/538001t.webp?s=5cb9c8528b5409da387a1c580a8e5201"
                }
            },
            "name": "Lecker"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 410,
                    "url": "https:\/\/myanimelist.net\/people\/410\/Shinji_Kawada",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/80128.jpg?s=0f87fd03d034c7adc20e1e6e09526bd6"
                        }
                    },
                    "name": "Kawada, Shinji"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 71538,
                    "url": "https:\/\/myanimelist.net\/people\/71538\/Tadeu_Arag\u00e3o",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/78995.jpg?s=da5df70bb376dc4cbc901267f71c3f1a"
                        }
                    },
                    "name": "Arag\u00e3o, Tadeu"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 26503,
                    "url": "https:\/\/myanimelist.net\/people\/26503\/J\u00e9r\u00e9my_Zylberberg",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/70622.jpg?s=63e70fd61c60c44705234ab2a0917b8c"
                        }
                    },
                    "name": "Zylberberg, J\u00e9r\u00e9my"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 60310,
                    "url": "https:\/\/myanimelist.net\/people\/60310\/Kamen_Casey",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/70727.jpg?s=3268d8cd36ae62084428730625ddbabf"
                        }
                    },
                    "name": "Casey, Kamen"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 59012,
                    "url": "https:\/\/myanimelist.net\/people\/59012\/Francesco_Fabbri",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/69832.jpg?s=c694e9522cb03fe2630e5812116029d2"
                        }
                    },
                    "name": "Fabbri, Francesco"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215352,
            "url": "https:\/\/myanimelist.net\/character\/215352\/Lernen",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/535549.jpg?s=5027d7956a64e29588235bfc0f69013a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/535549.webp?s=5027d7956a64e29588235bfc0f69013a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/2\/535549t.webp?s=5027d7956a64e29588235bfc0f69013a"
                }
            },
            "name": "Lernen"
        },
        "role": "Supporting",
        "favorites": 3,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 7699,
                    "url": "https:\/\/myanimelist.net\/people\/7699\/Atsushi_Miyauchi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/19939.jpg?s=836a507ad3f6c33cfa4f8ed726cf38d2"
                        }
                    },
                    "name": "Miyauchi, Atsushi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 56851,
                    "url": "https:\/\/myanimelist.net\/people\/56851\/Luiz_Amorim",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Amorim, Luiz"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 872,
                    "url": "https:\/\/myanimelist.net\/people\/872\/Kent_Williams",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/40726.jpg?s=a4860e1836e7a8485ae21178dfc96389"
                        }
                    },
                    "name": "Williams, Kent"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 43556,
                    "url": "https:\/\/myanimelist.net\/people\/43556\/Gianni_Giuliano",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/47232.jpg?s=9cf86ee0b7ba8eb83c8e78d00883d31c"
                        }
                    },
                    "name": "Giuliano, Gianni"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 33725,
                    "url": "https:\/\/myanimelist.net\/people\/33725\/Taric_Mehani",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/34743.jpg?s=fdd225dbec7bb44720812905811dce2b"
                        }
                    },
                    "name": "Mehani, Taric"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215254,
            "url": "https:\/\/myanimelist.net\/character\/215254\/Linie",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/524721.jpg?s=fe4ee2fae67fec5662a43252cc7c4b16"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/524721.webp?s=fe4ee2fae67fec5662a43252cc7c4b16",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/524721t.webp?s=fe4ee2fae67fec5662a43252cc7c4b16"
                }
            },
            "name": "Linie"
        },
        "role": "Supporting",
        "favorites": 32,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 44317,
                    "url": "https:\/\/myanimelist.net\/people\/44317\/Manaka_Iwami",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/67682.jpg?s=187afb2dfcf6e17bab6d32dc4d685796"
                        }
                    },
                    "name": "Iwami, Manaka"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 47003,
                    "url": "https:\/\/myanimelist.net\/people\/47003\/Dani_Chambers",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/50888.jpg?s=a1541d2745b82587b1362221854f866c"
                        }
                    },
                    "name": "Chambers, Dani"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 53381,
                    "url": "https:\/\/myanimelist.net\/people\/53381\/Luana_Stteger",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/66230.jpg?s=7470ff594b4012a1d44e8f4c80be52ff"
                        }
                    },
                    "name": "Stteger, Luana"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 69889,
                    "url": "https:\/\/myanimelist.net\/people\/69889\/Cecilia_Salustri",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Salustri, Cecilia"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 47671,
                    "url": "https:\/\/myanimelist.net\/people\/47671\/Nycolle_Gonz\u00e1lez",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70315.jpg?s=f593b3144ae334a87ce3dfd940fd1cc0"
                        }
                    },
                    "name": "Gonz\u00e1lez, Nycolle"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 70059,
                    "url": "https:\/\/myanimelist.net\/people\/70059\/Elia_Camine_Robbe",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/78213.jpg?s=f0b5609c8c4872410f4df0e3ad443304"
                        }
                    },
                    "name": "Robbe, Elia Camine"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 45798,
                    "url": "https:\/\/myanimelist.net\/people\/45798\/Amira_Leisner",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/62431.jpg?s=25181eba74bcb5a7ebac99c925507e90"
                        }
                    },
                    "name": "Leisner, Amira"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215342,
            "url": "https:\/\/myanimelist.net\/character\/215342\/L\u00e4nge",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/538694.jpg?s=6bb0cf0666e8f036c47eae7949ea1589"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/538694.webp?s=6bb0cf0666e8f036c47eae7949ea1589",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/13\/538694t.webp?s=6bb0cf0666e8f036c47eae7949ea1589"
                }
            },
            "name": "L\u00e4nge"
        },
        "role": "Supporting",
        "favorites": 3,
        "voice_actors": []
    },
    {
        "character": {
            "mal_id": 215253,
            "url": "https:\/\/myanimelist.net\/character\/215253\/L\u00fcgner",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/524722.jpg?s=189962f2723938d61b61eb4f5bfb5b8b"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/524722.webp?s=189962f2723938d61b61eb4f5bfb5b8b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/524722t.webp?s=189962f2723938d61b61eb4f5bfb5b8b"
                }
            },
            "name": "L\u00fcgner"
        },
        "role": "Supporting",
        "favorites": 11,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 95,
                    "url": "https:\/\/myanimelist.net\/people\/95\/Junichi_Suwabe",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/66059.jpg?s=56de4187bd125aa0eae974783d7b69ae"
                        }
                    },
                    "name": "Suwabe, Junichi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 50615,
                    "url": "https:\/\/myanimelist.net\/people\/50615\/Blake_McNamara",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/58350.jpg?s=43aa6b3aefbadbc0c15869bb414f8aad"
                        }
                    },
                    "name": "McNamara, Blake"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 26523,
                    "url": "https:\/\/myanimelist.net\/people\/26523\/Bastien_Bourl\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70600.jpg?s=c1359648329616f379d12b5c13a41b5c"
                        }
                    },
                    "name": "Bourl\u00e9, Bastien"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 46294,
                    "url": "https:\/\/myanimelist.net\/people\/46294\/Bruno_Sangreg\u00f3rio",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/62364.jpg?s=11cb76fc5f19b6bdd066e2f0f5380e8a"
                        }
                    },
                    "name": "Sangreg\u00f3rio, Bruno"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 6868,
                    "url": "https:\/\/myanimelist.net\/people\/6868\/Flavio_Aquilone",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/22297.jpg?s=693786cc6e77d7add37141a0499012b5"
                        }
                    },
                    "name": "Aquilone, Flavio"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 10024,
                    "url": "https:\/\/myanimelist.net\/people\/10024\/Gerardo_Reyero",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/75912.jpg?s=f436f8ac7763d8c42b2257bc39113b42"
                        }
                    },
                    "name": "Reyero, Gerardo"
                },
                "language": "Spanish"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215303,
            "url": "https:\/\/myanimelist.net\/character\/215303\/Methode",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/14\/538692.jpg?s=f37ee4e5b0f8584cd9d60a1e079ab5ee"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/14\/538692.webp?s=f37ee4e5b0f8584cd9d60a1e079ab5ee",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/14\/538692t.webp?s=f37ee4e5b0f8584cd9d60a1e079ab5ee"
                }
            },
            "name": "Methode"
        },
        "role": "Supporting",
        "favorites": 84,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 26063,
                    "url": "https:\/\/myanimelist.net\/people\/26063\/Reina_Ueda",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/63535.jpg?s=37e98a391e1ad9f822f6444326a13f21"
                        }
                    },
                    "name": "Ueda, Reina"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 70342,
                    "url": "https:\/\/myanimelist.net\/people\/70342\/Fernanda_Ferrer",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/78301.jpg?s=6be6a7678e6777020a3fe3824378284a"
                        }
                    },
                    "name": "Ferrer, Fernanda"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 26505,
                    "url": "https:\/\/myanimelist.net\/people\/26505\/Jessie_Lambotte",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/66886.jpg?s=5b7ad361190e3210c7ccf5480ab7a6df"
                        }
                    },
                    "name": "Lambotte, Jessie"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 313,
                    "url": "https:\/\/myanimelist.net\/people\/313\/Caitlin_Glass",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/40237.jpg?s=f9426183b369d4260c18b27dc486dfcb"
                        }
                    },
                    "name": "Glass, Caitlin"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 63699,
                    "url": "https:\/\/myanimelist.net\/people\/63699\/Valentina_De_Marchi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "De Marchi, Valentina"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 238973,
            "url": "https:\/\/myanimelist.net\/character\/238973\/Mut",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/531110.jpg?s=3171a73fa3bb94351ddaeafb57c74e99"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/531110.webp?s=3171a73fa3bb94351ddaeafb57c74e99",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/531110t.webp?s=3171a73fa3bb94351ddaeafb57c74e99"
                }
            },
            "name": "Mut"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 9886,
                    "url": "https:\/\/myanimelist.net\/people\/9886\/Nathalie_Bienaim\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/72146.jpg?s=2c8a59ee85f7d3372f0a9076e2c8f2b0"
                        }
                    },
                    "name": "Bienaim\u00e9, Nathalie"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 66613,
                    "url": "https:\/\/myanimelist.net\/people\/66613\/Juliana_M\u00e1ximo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/76138.jpg?s=396d00ab6811c4ea16c3dbc39b55d8fb"
                        }
                    },
                    "name": "M\u00e1ximo, Juliana"
                },
                "language": "Portuguese (BR)"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215259,
            "url": "https:\/\/myanimelist.net\/character\/215259\/Orden",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/531108.jpg?s=f664472c83647c656befaacb1ca02f24"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/531108.webp?s=f664472c83647c656befaacb1ca02f24",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/531108t.webp?s=f664472c83647c656befaacb1ca02f24"
                }
            },
            "name": "Orden"
        },
        "role": "Supporting",
        "favorites": 2,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 1637,
                    "url": "https:\/\/myanimelist.net\/people\/1637\/Yuuya_Uchida",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/32421.jpg?s=2dc9d27046d621f2c7a4051792bbebc5"
                        }
                    },
                    "name": "Uchida, Yuuya"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 666,
                    "url": "https:\/\/myanimelist.net\/people\/666\/Robert_McCollum",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/43298.jpg?s=ca8ba8819be453db013e3b6f095c9133"
                        }
                    },
                    "name": "McCollum, Robert"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 14489,
                    "url": "https:\/\/myanimelist.net\/people\/14489\/Dado_Monteiro",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/67939.jpg?s=2cfa56f530b2723234779ed9af28134b"
                        }
                    },
                    "name": "Monteiro, Dado"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 26503,
                    "url": "https:\/\/myanimelist.net\/people\/26503\/J\u00e9r\u00e9my_Zylberberg",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/70622.jpg?s=63e70fd61c60c44705234ab2a0917b8c"
                        }
                    },
                    "name": "Zylberberg, J\u00e9r\u00e9my"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 74034,
                    "url": "https:\/\/myanimelist.net\/people\/74034\/Federico_Talocci",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Talocci, Federico"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 187308,
            "url": "https:\/\/myanimelist.net\/character\/187308\/Qual",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/523394.jpg?s=49f8c897512c67c26e8d12fb26fbe84d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/523394.webp?s=49f8c897512c67c26e8d12fb26fbe84d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/523394t.webp?s=49f8c897512c67c26e8d12fb26fbe84d"
                }
            },
            "name": "Qual"
        },
        "role": "Supporting",
        "favorites": 13,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 25,
                    "url": "https:\/\/myanimelist.net\/people\/25\/Hiroki_Yasumoto",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/42158.jpg?s=7b70fcd60f26e4669cc945e4fde4b08d"
                        }
                    },
                    "name": "Yasumoto, Hiroki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 1179,
                    "url": "https:\/\/myanimelist.net\/people\/1179\/Antoine_Tom\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/71536.jpg?s=bd52ba42ddc49868891fe1b33f649e67"
                        }
                    },
                    "name": "Tom\u00e9, Antoine"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 46044,
                    "url": "https:\/\/myanimelist.net\/people\/46044\/Vanderlan_Mendes",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/63177.jpg?s=c9011887bc42c8637c9b0e250dfca064"
                        }
                    },
                    "name": "Mendes, Vanderlan"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 60157,
                    "url": "https:\/\/myanimelist.net\/people\/60157\/Roberto_Mendiola",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/70632.jpg?s=00bb50f8c10d7990d528c178eeccd57c"
                        }
                    },
                    "name": "Mendiola, Roberto"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 47746,
                    "url": "https:\/\/myanimelist.net\/people\/47746\/Carlo_Petruccetti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Petruccetti, Carlo"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 37679,
                    "url": "https:\/\/myanimelist.net\/people\/37679\/Major_Attaway",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/39574.jpg?s=5365d802e083b0cf0463d9a45fa0232b"
                        }
                    },
                    "name": "Attaway, Major"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 43483,
                    "url": "https:\/\/myanimelist.net\/people\/43483\/Martin_Sabel",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/47132.jpg?s=7887c0699bd36c893996f3e7e8df3df2"
                        }
                    },
                    "name": "Sabel, Martin"
                },
                "language": "German"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215251,
            "url": "https:\/\/myanimelist.net\/character\/215251\/Richter",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/535517.jpg?s=2e03fd196dfe4cc241c5c987d14e8801"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/535517.webp?s=2e03fd196dfe4cc241c5c987d14e8801",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/535517t.webp?s=2e03fd196dfe4cc241c5c987d14e8801"
                }
            },
            "name": "Richter"
        },
        "role": "Supporting",
        "favorites": 5,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 804,
                    "url": "https:\/\/myanimelist.net\/people\/804\/Eiji_Hanawa",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/69152.jpg?s=7aca65fdd34fac2764769ae6459532d2"
                        }
                    },
                    "name": "Hanawa, Eiji"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 43707,
                    "url": "https:\/\/myanimelist.net\/people\/43707\/Ramon_Campos",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/76922.jpg?s=ae3ba432ef48cf77da6ee34a74ef427a"
                        }
                    },
                    "name": "Campos, Ramon"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57299,
                    "url": "https:\/\/myanimelist.net\/people\/57299\/\u00d3scar_L\u00f3pez",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/68533.jpg?s=2a6ef228d3ea030e4e0a9db43ff44e60"
                        }
                    },
                    "name": "L\u00f3pez, \u00d3scar"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 43881,
                    "url": "https:\/\/myanimelist.net\/people\/43881\/Ian_Moore",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/47391.jpg?s=0692b7995145e771dca5d133b07c85cb"
                        }
                    },
                    "name": "Moore, Ian"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 1678,
                    "url": "https:\/\/myanimelist.net\/people\/1678\/Davide_Chevalier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/1577.jpg?s=f3c2a2e9adbc0c7edcbcb6f803e63834"
                        }
                    },
                    "name": "Chevalier, Davide"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 57434,
                    "url": "https:\/\/myanimelist.net\/people\/57434\/David_Allende",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/68789.jpg?s=976f3019af6288e47fd9b9da411674ea"
                        }
                    },
                    "name": "Allende, David"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 26639,
                    "url": "https:\/\/myanimelist.net\/people\/26639\/Gr\u00e9gory_Laisn\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/80798.jpg?s=6845ad2def6f79b136d968f003fe86a9"
                        }
                    },
                    "name": "Laisn\u00e9, Gr\u00e9gory"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215264,
            "url": "https:\/\/myanimelist.net\/character\/215264\/Scharf",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/538688.jpg?s=64fc524a82e71242c413d86168a6152a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/538688.webp?s=64fc524a82e71242c413d86168a6152a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/10\/538688t.webp?s=64fc524a82e71242c413d86168a6152a"
                }
            },
            "name": "Scharf"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 46904,
                    "url": "https:\/\/myanimelist.net\/people\/46904\/Yuuji_Murai",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/51612.jpg?s=eb3ae6f0819449ffadd01dde9d288b61"
                        }
                    },
                    "name": "Murai, Yuuji"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 42373,
                    "url": "https:\/\/myanimelist.net\/people\/42373\/Alejandro_Saab",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/46023.jpg?s=77009de4526f4e1d5e2633f33aed13d2"
                        }
                    },
                    "name": "Saab, Alejandro"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 67825,
                    "url": "https:\/\/myanimelist.net\/people\/67825\/Erik_Visses",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/76732.jpg?s=6df630782a6d4565b95be770d100c97b"
                        }
                    },
                    "name": "Visses, Erik"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 43385,
                    "url": "https:\/\/myanimelist.net\/people\/43385\/Luca_Mannocci",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/46849.jpg?s=dd070c1cb743ce3887f8541720c87271"
                        }
                    },
                    "name": "Mannocci, Luca"
                },
                "language": "Italian"
            }
        ]
    },
    {
        "character": {
            "mal_id": 196912,
            "url": "https:\/\/myanimelist.net\/character\/196912\/Sein",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/529669.jpg?s=01af13a5fcead2e03a913022f5ece346"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/529669.webp?s=01af13a5fcead2e03a913022f5ece346",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/529669t.webp?s=01af13a5fcead2e03a913022f5ece346"
                }
            },
            "name": "Sein"
        },
        "role": "Supporting",
        "favorites": 157,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 513,
                    "url": "https:\/\/myanimelist.net\/people\/513\/Yuuichi_Nakamura",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/74056.jpg?s=3a2a5b0adb316212ab5c6f6f214a3461"
                        }
                    },
                    "name": "Nakamura, Yuuichi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 22629,
                    "url": "https:\/\/myanimelist.net\/people\/22629\/Christopher_Wehkamp",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/48193.jpg?s=9ee5eccfe393ed34cefc0b683040677b"
                        }
                    },
                    "name": "Wehkamp, Christopher"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 48833,
                    "url": "https:\/\/myanimelist.net\/people\/48833\/Natsumi_Kawaida",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/59035.jpg?s=0963a90a2275ed64c03e22f4b184a502"
                        }
                    },
                    "name": "Kawaida, Natsumi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 52927,
                    "url": "https:\/\/myanimelist.net\/people\/52927\/Mauro_Horta",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/67730.jpg?s=6236d6fb604c1808fd739823043bffef"
                        }
                    },
                    "name": "Horta, Mauro"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 42624,
                    "url": "https:\/\/myanimelist.net\/people\/42624\/Emanuele_Ruzza",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/45983.jpg?s=9a77f73b9b5a0dfae2076e21d4bdf6b1"
                        }
                    },
                    "name": "Ruzza, Emanuele"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 55126,
                    "url": "https:\/\/myanimelist.net\/people\/55126\/Adrien_Larmande",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/72156.jpg?s=8d5da9fbb629055d6e0b080da75010b8"
                        }
                    },
                    "name": "Larmande, Adrien"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 57323,
                    "url": "https:\/\/myanimelist.net\/people\/57323\/Mauricio_P\u00e9rez_Castillo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70978.jpg?s=660d4ade9e47505ec91dec2cece68412"
                        }
                    },
                    "name": "P\u00e9rez Castillo, Mauricio"
                },
                "language": "Spanish"
            }
        ]
    },
    {
        "character": {
            "mal_id": 238328,
            "url": "https:\/\/myanimelist.net\/character\/238328\/Seins_Older_Brother",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/529731.jpg?s=5e34f73a46eb000fe99bf1f73b709a1d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/529731.webp?s=5e34f73a46eb000fe99bf1f73b709a1d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/12\/529731t.webp?s=5e34f73a46eb000fe99bf1f73b709a1d"
                }
            },
            "name": "Sein's Older Brother"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 183,
                    "url": "https:\/\/myanimelist.net\/people\/183\/Daisuke_Hirakawa",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/60506.jpg?s=4ce37741a2d14d607b3226a13a84e3a4"
                        }
                    },
                    "name": "Hirakawa, Daisuke"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 12026,
                    "url": "https:\/\/myanimelist.net\/people\/12026\/Jim_Foronda",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/24599.jpg?s=25424180383aa7941e782c7791f10c2c"
                        }
                    },
                    "name": "Foronda, Jim"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 43796,
                    "url": "https:\/\/myanimelist.net\/people\/43796\/Eduardo_Ribeiro",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/48704.jpg?s=8c5fecb803c3f2eb89822af58fb6f8e8"
                        }
                    },
                    "name": "Ribeiro, Eduardo"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 20240,
                    "url": "https:\/\/myanimelist.net\/people\/20240\/Marco_Vivio",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/22856.jpg?s=19af766f78c7f9e8c1b4217b21730eb5"
                        }
                    },
                    "name": "Vivio, Marco"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 56447,
                    "url": "https:\/\/myanimelist.net\/people\/56447\/Gauthier_Battoue",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/79947.jpg?s=5ac2e5a183d1781a22a063c96a89ce0d"
                        }
                    },
                    "name": "Battoue, Gauthier"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215301,
            "url": "https:\/\/myanimelist.net\/character\/215301\/Sense",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/14\/538685.jpg?s=d9d0f7381ce0482b0ec823f13f50c445"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/14\/538685.webp?s=d9d0f7381ce0482b0ec823f13f50c445",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/14\/538685t.webp?s=d9d0f7381ce0482b0ec823f13f50c445"
                }
            },
            "name": "Sense"
        },
        "role": "Supporting",
        "favorites": 56,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 14161,
                    "url": "https:\/\/myanimelist.net\/people\/14161\/Haruka_Terui",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/61727.jpg?s=0c06364d5334f6c723274168376936ce"
                        }
                    },
                    "name": "Terui, Haruka"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 55845,
                    "url": "https:\/\/myanimelist.net\/people\/55845\/Carol_Sodr\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/74211.jpg?s=96fc49965687c8b86a78f75eae592d9c"
                        }
                    },
                    "name": "Sodr\u00e9, Carol"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 10881,
                    "url": "https:\/\/myanimelist.net\/people\/10881\/Lindsay_Seidel",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/12459.jpg?s=1376b36c0b195dcbc7986717bd0f0ed6"
                        }
                    },
                    "name": "Seidel, Lindsay"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 56579,
                    "url": "https:\/\/myanimelist.net\/people\/56579\/Montserrat_Aguilar",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/68865.jpg?s=d43784bdabe14d7ce6aefb23a463b704"
                        }
                    },
                    "name": "Aguilar, Montserrat"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 66097,
                    "url": "https:\/\/myanimelist.net\/people\/66097\/Giorgia_Brunori",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/75606.jpg?s=51cea0d93d7676f558c4e4576bfad55a"
                        }
                    },
                    "name": "Brunori, Giorgia"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 9886,
                    "url": "https:\/\/myanimelist.net\/people\/9886\/Nathalie_Bienaim\u00e9",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/72146.jpg?s=2c8a59ee85f7d3372f0a9076e2c8f2b0"
                        }
                    },
                    "name": "Bienaim\u00e9, Nathalie"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 211285,
            "url": "https:\/\/myanimelist.net\/character\/211285\/Serie",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/536851.jpg?s=bc2d816ac437e368cc7b7b7cb94922d0"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/536851.webp?s=bc2d816ac437e368cc7b7b7cb94922d0",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/536851t.webp?s=bc2d816ac437e368cc7b7b7cb94922d0"
                }
            },
            "name": "Serie"
        },
        "role": "Supporting",
        "favorites": 102,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 655,
                    "url": "https:\/\/myanimelist.net\/people\/655\/Mariya_Ise",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/77122.jpg?s=194b31a16163e700a784b71078ef41ef"
                        }
                    },
                    "name": "Ise, Mariya"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 10292,
                    "url": "https:\/\/myanimelist.net\/people\/10292\/Anastasia_Munoz",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/23831.jpg?s=4f06fcffad8e0741464361db9e99e8ca"
                        }
                    },
                    "name": "Munoz, Anastasia"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 55748,
                    "url": "https:\/\/myanimelist.net\/people\/55748\/Paola_Molinari",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/68872.jpg?s=8d1f67fbba9767d58a3fa64d5df4a6ea"
                        }
                    },
                    "name": "Molinari, Paola"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 57186,
                    "url": "https:\/\/myanimelist.net\/people\/57186\/Monserrat_Mendoza",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/72997.jpg?s=4dfa228fc45958b4425556e6ed1cd749"
                        }
                    },
                    "name": "Mendoza, Monserrat"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 42844,
                    "url": "https:\/\/myanimelist.net\/people\/42844\/Mattea_Serpelloni",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Serpelloni, Mattea"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 61872,
                    "url": "https:\/\/myanimelist.net\/people\/61872\/Yumi_Fujimori",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/72482.jpg?s=db47194e4aedd5751450eed6d254636e"
                        }
                    },
                    "name": "Fujimori, Yumi"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215271,
            "url": "https:\/\/myanimelist.net\/character\/215271\/Starks_Father",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/529449.jpg?s=172edf967c0776d22674084d506e14ce"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/529449.webp?s=172edf967c0776d22674084d506e14ce",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/16\/529449t.webp?s=172edf967c0776d22674084d506e14ce"
                }
            },
            "name": "Stark's Father"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 801,
                    "url": "https:\/\/myanimelist.net\/people\/801\/Yasuyuki_Kase",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/19373.jpg?s=956d6a6ea49acf6c0f243946675c5ae7"
                        }
                    },
                    "name": "Kase, Yasuyuki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 44291,
                    "url": "https:\/\/myanimelist.net\/people\/44291\/Glauco_Marques",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/76479.jpg?s=32a6bd3cfa55464ce3b8c7096c1f60fd"
                        }
                    },
                    "name": "Marques, Glauco"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 1623,
                    "url": "https:\/\/myanimelist.net\/people\/1623\/Damien_Boisseau",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/14605.jpg?s=52e4a8604ec7a199fb8deacd92782026"
                        }
                    },
                    "name": "Boisseau, Damien"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 42677,
                    "url": "https:\/\/myanimelist.net\/people\/42677\/Guido_Sagliocca",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Sagliocca, Guido"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 74011,
                    "url": "https:\/\/myanimelist.net\/people\/74011\/Gerardo_Davila",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/80233.jpg?s=2eced89f7758c897471d1ff21ba959ad"
                        }
                    },
                    "name": "Davila, Gerardo"
                },
                "language": "English"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215256,
            "url": "https:\/\/myanimelist.net\/character\/215256\/Stoltz",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/6\/529121.jpg?s=edbdb45eab4f0d6da92d6c34e7c3ea91"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/6\/529121.webp?s=edbdb45eab4f0d6da92d6c34e7c3ea91",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/6\/529121t.webp?s=edbdb45eab4f0d6da92d6c34e7c3ea91"
                }
            },
            "name": "Stoltz"
        },
        "role": "Supporting",
        "favorites": 13,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 7695,
                    "url": "https:\/\/myanimelist.net\/people\/7695\/Takuya_Eguchi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/67736.jpg?s=deaaa0f995e529977b6b4435b9c7d2f7"
                        }
                    },
                    "name": "Eguchi, Takuya"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 43718,
                    "url": "https:\/\/myanimelist.net\/people\/43718\/Adrian_Tatini",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/67558.jpg?s=fd161d2fc9f66d91d5db93343c59dacc"
                        }
                    },
                    "name": "Tatini, Adrian"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 41396,
                    "url": "https:\/\/myanimelist.net\/people\/41396\/Mirko_Cannella",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/43268.jpg?s=ecf8abda595e8ce581dea16416969c28"
                        }
                    },
                    "name": "Cannella, Mirko"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 66405,
                    "url": "https:\/\/myanimelist.net\/people\/66405\/Dalton_Walker",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/75966.jpg?s=4b41e82e0c4492fe32348c6cc1b0f23c"
                        }
                    },
                    "name": "Walker, Dalton"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 74046,
                    "url": "https:\/\/myanimelist.net\/people\/74046\/Louis_Lecordier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/80255.jpg?s=072cdd93343f7004843d3e2376721af3"
                        }
                    },
                    "name": "Lecordier, Louis"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215260,
            "url": "https:\/\/myanimelist.net\/character\/215260\/Ton",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/538789.jpg?s=982cc4316aee0f6e0dd44fbc9a13ce8d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/538789.webp?s=982cc4316aee0f6e0dd44fbc9a13ce8d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/11\/538789t.webp?s=982cc4316aee0f6e0dd44fbc9a13ce8d"
                }
            },
            "name": "Ton"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 47739,
                    "url": "https:\/\/myanimelist.net\/people\/47739\/Taito_Ban",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/74502.jpg?s=8425b98a40dcca2bd35815c9356ec97c"
                        }
                    },
                    "name": "Ban, Taito"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 44011,
                    "url": "https:\/\/myanimelist.net\/people\/44011\/Andr\u00e9_Rinaldi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/75019.jpg?s=e96eef168ee3ab7d5f2abe798b7c6e34"
                        }
                    },
                    "name": "Rinaldi, Andr\u00e9"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 53050,
                    "url": "https:\/\/myanimelist.net\/people\/53050\/Matteo_Liofredi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/57400.jpg?s=096e332a41dcaf0cec5328e944d850eb"
                        }
                    },
                    "name": "Liofredi, Matteo"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 43096,
                    "url": "https:\/\/myanimelist.net\/people\/43096\/Kyle_Igneczi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/58509.jpg?s=24c190797b66779b304a99f60974fa14"
                        }
                    },
                    "name": "Igneczi, Kyle"
                },
                "language": "English"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215273,
            "url": "https:\/\/myanimelist.net\/character\/215273\/Voll",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/535528.jpg?s=4703eba900e83fbf7266e859171ffab7"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/535528.webp?s=4703eba900e83fbf7266e859171ffab7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/535528t.webp?s=4703eba900e83fbf7266e859171ffab7"
                }
            },
            "name": "Voll"
        },
        "role": "Supporting",
        "favorites": 17,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 945,
                    "url": "https:\/\/myanimelist.net\/people\/945\/Mitsuaki_Hoshino",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/55120.jpg?s=c409277b0821693b32aea4d6be534204"
                        }
                    },
                    "name": "Hoshino, Mitsuaki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 65202,
                    "url": "https:\/\/myanimelist.net\/people\/65202\/Mac_McGee",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/80199.jpg?s=c8c377ad7a59d6510aee23dd727c6aee"
                        }
                    },
                    "name": "McGee, Mac"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 23669,
                    "url": "https:\/\/myanimelist.net\/people\/23669\/Ambrogio_Colombo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/38289.jpg?s=55b94ae09079a367306ff0e75e5d61e4"
                        }
                    },
                    "name": "Colombo, Ambrogio"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 40351,
                    "url": "https:\/\/myanimelist.net\/people\/40351\/Carlos_Silveira",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/42348.jpg?s=d790e8181b5715d0daef9e16ce8afd31"
                        }
                    },
                    "name": "Silveira, Carlos"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 39332,
                    "url": "https:\/\/myanimelist.net\/people\/39332\/Philippe_Ariotti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/44411.jpg?s=3d2a27b5b55f6aeb2688dd3cab1cf581"
                        }
                    },
                    "name": "Ariotti, Philippe"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215252,
            "url": "https:\/\/myanimelist.net\/character\/215252\/Warrior_Gorilla",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/530186.jpg?s=dd8ca0ef3a68aae02afa7d063f109df7"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/530186.webp?s=dd8ca0ef3a68aae02afa7d063f109df7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/4\/530186t.webp?s=dd8ca0ef3a68aae02afa7d063f109df7"
                }
            },
            "name": "Warrior Gorilla"
        },
        "role": "Supporting",
        "favorites": 1,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 29347,
                    "url": "https:\/\/myanimelist.net\/people\/29347\/Hiromichi_Tezuka",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/74494.jpg?s=88afa0f8abb371b9e2c484b3c578bbbc"
                        }
                    },
                    "name": "Tezuka, Hiromichi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 65766,
                    "url": "https:\/\/myanimelist.net\/people\/65766\/Satsuki_Kokubu",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/75310.jpg?s=0e756fce453614898501782bfda01561"
                        }
                    },
                    "name": "Kokubu, Satsuki"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 55848,
                    "url": "https:\/\/myanimelist.net\/people\/55848\/Augusto_de_Souza",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "de Souza, Augusto"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 56343,
                    "url": "https:\/\/myanimelist.net\/people\/56343\/Roberto_Fedele",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/67077.jpg?s=efd0b4c2a4c61127f2d1deebf16988f1"
                        }
                    },
                    "name": "Fedele, Roberto"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 57185,
                    "url": "https:\/\/myanimelist.net\/people\/57185\/Luis_Fernando_Orozco",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/70815.jpg?s=ce673cdc02a4588aeb5a0ec3f8f913e7"
                        }
                    },
                    "name": "Orozco, Luis Fernando"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 52315,
                    "url": "https:\/\/myanimelist.net\/people\/52315\/Nazeeh_H_Tarsha",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/60536.jpg?s=56379262535eec05a8eabf3e40184675"
                        }
                    },
                    "name": "Tarsha, Nazeeh H."
                },
                "language": "English"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215249,
            "url": "https:\/\/myanimelist.net\/character\/215249\/Wirbel",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/535526.jpg?s=effce5810a3e914263e14764b9554da5"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/535526.webp?s=effce5810a3e914263e14764b9554da5",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/15\/535526t.webp?s=effce5810a3e914263e14764b9554da5"
                }
            },
            "name": "Wirbel"
        },
        "role": "Supporting",
        "favorites": 30,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 196,
                    "url": "https:\/\/myanimelist.net\/people\/196\/Kishou_Taniyama",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/68788.jpg?s=31e1db2163094a09be8f2f8879edf011"
                        }
                    },
                    "name": "Taniyama, Kishou"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 58196,
                    "url": "https:\/\/myanimelist.net\/people\/58196\/Tarc\u00edsio_Pureza",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/74776.jpg?s=e293d4d5e129df09ffffb9bbb6784a27"
                        }
                    },
                    "name": "Pureza, Tarc\u00edsio"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 62562,
                    "url": "https:\/\/myanimelist.net\/people\/62562\/Carlos_Enrique_Bonilla",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/71800.jpg?s=6b1e4a4f27c492e0e73f32936aa274b0"
                        }
                    },
                    "name": "Bonilla, Carlos Enrique"
                },
                "language": "Spanish"
            },
            {
                "person": {
                    "mal_id": 16775,
                    "url": "https:\/\/myanimelist.net\/people\/16775\/Ricco_Fajardo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/73214.jpg?s=61340a24c654b8b8c8ebed4cbff452e1"
                        }
                    },
                    "name": "Fajardo, Ricco"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 72152,
                    "url": "https:\/\/myanimelist.net\/people\/72152\/Luca_Appetiti",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                        }
                    },
                    "name": "Appetiti, Luca"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 51273,
                    "url": "https:\/\/myanimelist.net\/people\/51273\/Meg_McClain",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/59270.jpg?s=c6f936cfd3c0507c12d7489355333d0d"
                        }
                    },
                    "name": "McClain, Meg"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 31623,
                    "url": "https:\/\/myanimelist.net\/people\/31623\/Benjamin_Bollen",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/1\/70598.jpg?s=f2dc96068ba04b8a283ca1d441108def"
                        }
                    },
                    "name": "Bollen, Benjamin"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 1613,
                    "url": "https:\/\/myanimelist.net\/people\/1613\/Brigitte_Lecordier",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/67476.jpg?s=ff50105bede34513c44198b231e6e6b1"
                        }
                    },
                    "name": "Lecordier, Brigitte"
                },
                "language": "French"
            }
        ]
    },
    {
        "character": {
            "mal_id": 215258,
            "url": "https:\/\/myanimelist.net\/character\/215258\/Wirt",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/5\/531107.jpg?s=b1164536454617e4a5de91572c8fbc7c"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/5\/531107.webp?s=b1164536454617e4a5de91572c8fbc7c",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/5\/531107t.webp?s=b1164536454617e4a5de91572c8fbc7c"
                }
            },
            "name": "Wirt"
        },
        "role": "Supporting",
        "favorites": 0,
        "voice_actors": []
    },
    {
        "character": {
            "mal_id": 206725,
            "url": "https:\/\/myanimelist.net\/character\/206725\/\u00dcbel",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/543072.jpg?s=8a1e7b1b5acb4d902a9f39147e4209af"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/543072.webp?s=8a1e7b1b5acb4d902a9f39147e4209af",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/characters\/9\/543072t.webp?s=8a1e7b1b5acb4d902a9f39147e4209af"
                }
            },
            "name": "\u00dcbel"
        },
        "role": "Supporting",
        "favorites": 886,
        "voice_actors": [
            {
                "person": {
                    "mal_id": 48048,
                    "url": "https:\/\/myanimelist.net\/people\/48048\/Ikumi_Hasegawa",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/80406.jpg?s=903c6ff1d69a5fa937175784c63e35c0"
                        }
                    },
                    "name": "Hasegawa, Ikumi"
                },
                "language": "Japanese"
            },
            {
                "person": {
                    "mal_id": 38451,
                    "url": "https:\/\/myanimelist.net\/people\/38451\/Morgan_Berry",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/48585.jpg?s=4ab628c4e3f797d0c4ecfe261eb32ddb"
                        }
                    },
                    "name": "Berry, Morgan"
                },
                "language": "English"
            },
            {
                "person": {
                    "mal_id": 53382,
                    "url": "https:\/\/myanimelist.net\/people\/53382\/Thayn\u00e1_Marciano",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/79718.jpg?s=b60266d41c27b9f94b5f93fd13db6c10"
                        }
                    },
                    "name": "Marciano, Thayn\u00e1"
                },
                "language": "Portuguese (BR)"
            },
            {
                "person": {
                    "mal_id": 42616,
                    "url": "https:\/\/myanimelist.net\/people\/42616\/Sara_Labidi",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/45970.jpg?s=35ea42d94ef77be4ea48a21afb591709"
                        }
                    },
                    "name": "Labidi, Sara"
                },
                "language": "Italian"
            },
            {
                "person": {
                    "mal_id": 56474,
                    "url": "https:\/\/myanimelist.net\/people\/56474\/Lauryanne_Philippe",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/67246.jpg?s=dcd5ead40cf593aeb44921bb5445391b"
                        }
                    },
                    "name": "Philippe, Lauryanne"
                },
                "language": "French"
            },
            {
                "person": {
                    "mal_id": 68187,
                    "url": "https:\/\/myanimelist.net\/people\/68187\/Nayeli_Hidalgo",
                    "images": {
                        "jpg": {
                            "image_url": "https:\/\/cdn.myanimelist.net\/images\/voiceactors\/3\/76969.jpg?s=1fb4277c98303ac0dca5cd89e3207139"
                        }
                    },
                    "name": "Hidalgo, Nayeli"
                },
                "language": "Spanish"
            }
        ]
    }
]

let morePics = [
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1675\/127908.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1675\/127908t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1675\/127908l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1675\/127908.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1675\/127908t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1675\/127908l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1218\/134045.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1218\/134045t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1218\/134045l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1218\/134045.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1218\/134045t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1218\/134045l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1667\/135908.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1667\/135908t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1667\/135908l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1667\/135908.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1667\/135908t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1667\/135908l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1875\/136959.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1875\/136959t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1875\/136959l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1875\/136959.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1875\/136959t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1875\/136959l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1553\/137254.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1553\/137254t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1553\/137254l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1553\/137254.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1553\/137254t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1553\/137254l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1015\/138006l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1531\/139077.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1531\/139077t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1531\/139077l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1531\/139077.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1531\/139077t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1531\/139077l.webp"
        }
    },
    {
        "jpg": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1036\/140549.jpg",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1036\/140549t.jpg",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1036\/140549l.jpg"
        },
        "webp": {
            "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1036\/140549.webp",
            "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1036\/140549t.webp",
            "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1036\/140549l.webp"
        }
    }
]

let moreVideos = [
    {
        "title": "PV 5",
        "trailer": {
            "youtube_id": "ZEkwCGJ3o7M",
            "url": "https:\/\/www.youtube.com\/watch?v=ZEkwCGJ3o7M",
            "embed_url": "https:\/\/www.youtube.com\/embed\/ZEkwCGJ3o7M?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/ZEkwCGJ3o7M\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "PV 4",
        "trailer": {
            "youtube_id": "aEOyEtArBI8",
            "url": "https:\/\/www.youtube.com\/watch?v=aEOyEtArBI8",
            "embed_url": "https:\/\/www.youtube.com\/embed\/aEOyEtArBI8?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/aEOyEtArBI8\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/aEOyEtArBI8\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/aEOyEtArBI8\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/aEOyEtArBI8\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/aEOyEtArBI8\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "PV 3",
        "trailer": {
            "youtube_id": "tR8YH0G67Rk",
            "url": "https:\/\/www.youtube.com\/watch?v=tR8YH0G67Rk",
            "embed_url": "https:\/\/www.youtube.com\/embed\/tR8YH0G67Rk?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/tR8YH0G67Rk\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/tR8YH0G67Rk\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/tR8YH0G67Rk\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/tR8YH0G67Rk\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/tR8YH0G67Rk\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "PV 2",
        "trailer": {
            "youtube_id": "itKPyGXrCVA",
            "url": "https:\/\/www.youtube.com\/watch?v=itKPyGXrCVA",
            "embed_url": "https:\/\/www.youtube.com\/embed\/itKPyGXrCVA?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/itKPyGXrCVA\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/itKPyGXrCVA\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/itKPyGXrCVA\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/itKPyGXrCVA\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/itKPyGXrCVA\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "PV 1",
        "trailer": {
            "youtube_id": "f5ZEiJyqDKU",
            "url": "https:\/\/www.youtube.com\/watch?v=f5ZEiJyqDKU",
            "embed_url": "https:\/\/www.youtube.com\/embed\/f5ZEiJyqDKU?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/f5ZEiJyqDKU\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/f5ZEiJyqDKU\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/f5ZEiJyqDKU\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/f5ZEiJyqDKU\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/f5ZEiJyqDKU\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Wirbel Ver.)",
        "trailer": {
            "youtube_id": "XNNuuCP6Nvs",
            "url": "https:\/\/www.youtube.com\/watch?v=XNNuuCP6Nvs",
            "embed_url": "https:\/\/www.youtube.com\/embed\/XNNuuCP6Nvs?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/XNNuuCP6Nvs\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/XNNuuCP6Nvs\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/XNNuuCP6Nvs\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/XNNuuCP6Nvs\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/XNNuuCP6Nvs\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Sense Ver.)",
        "trailer": {
            "youtube_id": "nzMaWsy86A8",
            "url": "https:\/\/www.youtube.com\/watch?v=nzMaWsy86A8",
            "embed_url": "https:\/\/www.youtube.com\/embed\/nzMaWsy86A8?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/nzMaWsy86A8\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/nzMaWsy86A8\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/nzMaWsy86A8\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/nzMaWsy86A8\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/nzMaWsy86A8\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Richter Ver.)",
        "trailer": {
            "youtube_id": "VPhh95C2wm8",
            "url": "https:\/\/www.youtube.com\/watch?v=VPhh95C2wm8",
            "embed_url": "https:\/\/www.youtube.com\/embed\/VPhh95C2wm8?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/VPhh95C2wm8\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/VPhh95C2wm8\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/VPhh95C2wm8\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/VPhh95C2wm8\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/VPhh95C2wm8\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Lawine Ver.)",
        "trailer": {
            "youtube_id": "-QDnVaGc7BY",
            "url": "https:\/\/www.youtube.com\/watch?v=-QDnVaGc7BY",
            "embed_url": "https:\/\/www.youtube.com\/embed\/-QDnVaGc7BY?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/-QDnVaGc7BY\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/-QDnVaGc7BY\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/-QDnVaGc7BY\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/-QDnVaGc7BY\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/-QDnVaGc7BY\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Laufen Ver.)",
        "trailer": {
            "youtube_id": "TE2xRoUEzXo",
            "url": "https:\/\/www.youtube.com\/watch?v=TE2xRoUEzXo",
            "embed_url": "https:\/\/www.youtube.com\/embed\/TE2xRoUEzXo?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/TE2xRoUEzXo\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/TE2xRoUEzXo\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/TE2xRoUEzXo\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/TE2xRoUEzXo\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/TE2xRoUEzXo\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Land Ver.)",
        "trailer": {
            "youtube_id": "YfCyCVtqab0",
            "url": "https:\/\/www.youtube.com\/watch?v=YfCyCVtqab0",
            "embed_url": "https:\/\/www.youtube.com\/embed\/YfCyCVtqab0?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/YfCyCVtqab0\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/YfCyCVtqab0\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/YfCyCVtqab0\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/YfCyCVtqab0\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/YfCyCVtqab0\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Kanne Ver.)",
        "trailer": {
            "youtube_id": "Me_aFftRmBg",
            "url": "https:\/\/www.youtube.com\/watch?v=Me_aFftRmBg",
            "embed_url": "https:\/\/www.youtube.com\/embed\/Me_aFftRmBg?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/Me_aFftRmBg\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/Me_aFftRmBg\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/Me_aFftRmBg\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/Me_aFftRmBg\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/Me_aFftRmBg\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Genau Ver.)",
        "trailer": {
            "youtube_id": "Z0ZdYRzwXk0",
            "url": "https:\/\/www.youtube.com\/watch?v=Z0ZdYRzwXk0",
            "embed_url": "https:\/\/www.youtube.com\/embed\/Z0ZdYRzwXk0?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/Z0ZdYRzwXk0\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/Z0ZdYRzwXk0\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/Z0ZdYRzwXk0\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/Z0ZdYRzwXk0\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/Z0ZdYRzwXk0\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Ehre Ver.)",
        "trailer": {
            "youtube_id": "X98r77_8-5k",
            "url": "https:\/\/www.youtube.com\/watch?v=X98r77_8-5k",
            "embed_url": "https:\/\/www.youtube.com\/embed\/X98r77_8-5k?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/X98r77_8-5k\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/X98r77_8-5k\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/X98r77_8-5k\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/X98r77_8-5k\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/X98r77_8-5k\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (Denken Ver.)",
        "trailer": {
            "youtube_id": "zJkcpCQ2aBI",
            "url": "https:\/\/www.youtube.com\/watch?v=zJkcpCQ2aBI",
            "embed_url": "https:\/\/www.youtube.com\/embed\/zJkcpCQ2aBI?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/zJkcpCQ2aBI\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/zJkcpCQ2aBI\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/zJkcpCQ2aBI\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/zJkcpCQ2aBI\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/zJkcpCQ2aBI\/maxresdefault.jpg"
            }
        }
    },
    {
        "title": "Character PV (\u00dcbel Ver.)",
        "trailer": {
            "youtube_id": "yuivjtFn98c",
            "url": "https:\/\/www.youtube.com\/watch?v=yuivjtFn98c",
            "embed_url": "https:\/\/www.youtube.com\/embed\/yuivjtFn98c?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https:\/\/img.youtube.com\/vi\/yuivjtFn98c\/default.jpg",
                "small_image_url": "https:\/\/img.youtube.com\/vi\/yuivjtFn98c\/sddefault.jpg",
                "medium_image_url": "https:\/\/img.youtube.com\/vi\/yuivjtFn98c\/mqdefault.jpg",
                "large_image_url": "https:\/\/img.youtube.com\/vi\/yuivjtFn98c\/hqdefault.jpg",
                "maximum_image_url": "https:\/\/img.youtube.com\/vi\/yuivjtFn98c\/maxresdefault.jpg"
            }
        }
    }
]

let recommend = [
    {
        "entry": {
            "mal_id": 33352,
            "url": "https:\/\/myanimelist.net\/anime\/33352\/Violet_Evergarden",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1795\/95088.jpg?s=9e24a139603a4e0ea8ea055a230b54d5",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1795\/95088t.jpg?s=9e24a139603a4e0ea8ea055a230b54d5",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1795\/95088l.jpg?s=9e24a139603a4e0ea8ea055a230b54d5"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1795\/95088.webp?s=9e24a139603a4e0ea8ea055a230b54d5",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1795\/95088t.webp?s=9e24a139603a4e0ea8ea055a230b54d5",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1795\/95088l.webp?s=9e24a139603a4e0ea8ea055a230b54d5"
                }
            },
            "title": "Violet Evergarden"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/33352-52991",
        "votes": 18
    },
    {
        "entry": {
            "mal_id": 41025,
            "url": "https:\/\/myanimelist.net\/anime\/41025\/Fumetsu_no_Anata_e",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1880\/118484.jpg?s=73b91a0146dfa5fadc5ff9f870c72741",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1880\/118484t.jpg?s=73b91a0146dfa5fadc5ff9f870c72741",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1880\/118484l.jpg?s=73b91a0146dfa5fadc5ff9f870c72741"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1880\/118484.webp?s=73b91a0146dfa5fadc5ff9f870c72741",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1880\/118484t.webp?s=73b91a0146dfa5fadc5ff9f870c72741",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1880\/118484l.webp?s=73b91a0146dfa5fadc5ff9f870c72741"
                }
            },
            "title": "Fumetsu no Anata e"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/41025-52991",
        "votes": 13
    },
    {
        "entry": {
            "mal_id": 35851,
            "url": "https:\/\/myanimelist.net\/anime\/35851\/Sayonara_no_Asa_ni_Yakusoku_no_Hana_wo_Kazarou",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/89556.jpg?s=c81e5bf28128120f3ebe27b03bb2e527",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/89556t.jpg?s=c81e5bf28128120f3ebe27b03bb2e527",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/89556l.jpg?s=c81e5bf28128120f3ebe27b03bb2e527"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/89556.webp?s=c81e5bf28128120f3ebe27b03bb2e527",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/89556t.webp?s=c81e5bf28128120f3ebe27b03bb2e527",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/89556l.webp?s=c81e5bf28128120f3ebe27b03bb2e527"
                }
            },
            "title": "Sayonara no Asa ni Yakusoku no Hana wo Kazarou"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/35851-52991",
        "votes": 11
    },
    {
        "entry": {
            "mal_id": 40571,
            "url": "https:\/\/myanimelist.net\/anime\/40571\/Majo_no_Tabitabi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1802\/108501.jpg?s=243c441d14fa25619a8c97e64b859bfe",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1802\/108501t.jpg?s=243c441d14fa25619a8c97e64b859bfe",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1802\/108501l.jpg?s=243c441d14fa25619a8c97e64b859bfe"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1802\/108501.webp?s=243c441d14fa25619a8c97e64b859bfe",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1802\/108501t.webp?s=243c441d14fa25619a8c97e64b859bfe",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1802\/108501l.webp?s=243c441d14fa25619a8c97e64b859bfe"
                }
            },
            "title": "Majo no Tabitabi"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/40571-52991",
        "votes": 7
    },
    {
        "entry": {
            "mal_id": 486,
            "url": "https:\/\/myanimelist.net\/anime\/486\/Kino_no_Tabi__The_Beautiful_World",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1763\/95397.jpg?s=2a08354c0c07bf482d35b5c1ea19a74b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1763\/95397t.jpg?s=2a08354c0c07bf482d35b5c1ea19a74b",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1763\/95397l.jpg?s=2a08354c0c07bf482d35b5c1ea19a74b"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1763\/95397.webp?s=2a08354c0c07bf482d35b5c1ea19a74b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1763\/95397t.webp?s=2a08354c0c07bf482d35b5c1ea19a74b",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1763\/95397l.webp?s=2a08354c0c07bf482d35b5c1ea19a74b"
                }
            },
            "title": "Kino no Tabi: The Beautiful World"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/486-52991",
        "votes": 6
    },
    {
        "entry": {
            "mal_id": 457,
            "url": "https:\/\/myanimelist.net\/anime\/457\/Mushishi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/73862.jpg?s=d976f75f480430a0c9fde4455696131d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/73862t.jpg?s=d976f75f480430a0c9fde4455696131d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/73862l.jpg?s=d976f75f480430a0c9fde4455696131d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/73862.webp?s=d976f75f480430a0c9fde4455696131d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/73862t.webp?s=d976f75f480430a0c9fde4455696131d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/73862l.webp?s=d976f75f480430a0c9fde4455696131d"
                }
            },
            "title": "Mushishi"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/457-52991",
        "votes": 6
    },
    {
        "entry": {
            "mal_id": 2966,
            "url": "https:\/\/myanimelist.net\/anime\/2966\/Ookami_to_Koushinryou",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/59401.jpg?s=1c81971daf350f8e99fe00fe3bbd0f95",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/59401t.jpg?s=1c81971daf350f8e99fe00fe3bbd0f95",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/59401l.jpg?s=1c81971daf350f8e99fe00fe3bbd0f95"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/59401.webp?s=1c81971daf350f8e99fe00fe3bbd0f95",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/59401t.webp?s=1c81971daf350f8e99fe00fe3bbd0f95",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/5\/59401l.webp?s=1c81971daf350f8e99fe00fe3bbd0f95"
                }
            },
            "title": "Ookami to Koushinryou"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/2966-52991",
        "votes": 5
    },
    {
        "entry": {
            "mal_id": 39535,
            "url": "https:\/\/myanimelist.net\/anime\/39535\/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1530\/117776.jpg?s=66e9881567062ce45eddd8330bd9cc30",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1530\/117776t.jpg?s=66e9881567062ce45eddd8330bd9cc30",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1530\/117776l.jpg?s=66e9881567062ce45eddd8330bd9cc30"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1530\/117776.webp?s=66e9881567062ce45eddd8330bd9cc30",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1530\/117776t.webp?s=66e9881567062ce45eddd8330bd9cc30",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1530\/117776l.webp?s=66e9881567062ce45eddd8330bd9cc30"
                }
            },
            "title": "Mushoku Tensei: Isekai Ittara Honki Dasu"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/39535-52991",
        "votes": 4
    },
    {
        "entry": {
            "mal_id": 35838,
            "url": "https:\/\/myanimelist.net\/anime\/35838\/Shoujo_Shuumatsu_Ryokou",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/88321.jpg?s=3a72723dfe33907e390a98633fc41f9d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/88321t.jpg?s=3a72723dfe33907e390a98633fc41f9d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/88321l.jpg?s=3a72723dfe33907e390a98633fc41f9d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/88321.webp?s=3a72723dfe33907e390a98633fc41f9d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/88321t.webp?s=3a72723dfe33907e390a98633fc41f9d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/88321l.webp?s=3a72723dfe33907e390a98633fc41f9d"
                }
            },
            "title": "Shoujo Shuumatsu Ryokou"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/35838-52991",
        "votes": 3
    },
    {
        "entry": {
            "mal_id": 52701,
            "url": "https:\/\/myanimelist.net\/anime\/52701\/Dungeon_Meshi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1711\/142478.jpg?s=8c432fe78ec9dd1b3219f3c5faf4308f",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1711\/142478t.jpg?s=8c432fe78ec9dd1b3219f3c5faf4308f",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1711\/142478l.jpg?s=8c432fe78ec9dd1b3219f3c5faf4308f"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1711\/142478.webp?s=8c432fe78ec9dd1b3219f3c5faf4308f",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1711\/142478t.webp?s=8c432fe78ec9dd1b3219f3c5faf4308f",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1711\/142478l.webp?s=8c432fe78ec9dd1b3219f3c5faf4308f"
                }
            },
            "title": "Dungeon Meshi"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/52701-52991",
        "votes": 3
    },
    {
        "entry": {
            "mal_id": 4081,
            "url": "https:\/\/myanimelist.net\/anime\/4081\/Natsume_Yuujinchou",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1681\/108439.jpg?s=539875b65ff54a7d3e8ea8e40cd47a85",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1681\/108439t.jpg?s=539875b65ff54a7d3e8ea8e40cd47a85",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1681\/108439l.jpg?s=539875b65ff54a7d3e8ea8e40cd47a85"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1681\/108439.webp?s=539875b65ff54a7d3e8ea8e40cd47a85",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1681\/108439t.webp?s=539875b65ff54a7d3e8ea8e40cd47a85",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1681\/108439l.webp?s=539875b65ff54a7d3e8ea8e40cd47a85"
                }
            },
            "title": "Natsume Yuujinchou"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/4081-52991",
        "votes": 3
    },
    {
        "entry": {
            "mal_id": 27775,
            "url": "https:\/\/myanimelist.net\/anime\/27775\/Plastic_Memories",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/72750.jpg?s=61d6461811fb65b5ad164b3d69115af8",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/72750t.jpg?s=61d6461811fb65b5ad164b3d69115af8",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/72750l.jpg?s=61d6461811fb65b5ad164b3d69115af8"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/72750.webp?s=61d6461811fb65b5ad164b3d69115af8",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/72750t.webp?s=61d6461811fb65b5ad164b3d69115af8",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/72750l.webp?s=61d6461811fb65b5ad164b3d69115af8"
                }
            },
            "title": "Plastic Memories"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/27775-52991",
        "votes": 2
    },
    {
        "entry": {
            "mal_id": 35062,
            "url": "https:\/\/myanimelist.net\/anime\/35062\/Mahoutsukai_no_Yome",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88476.jpg?s=0dcaf8e0720f4a54712da5423b63bd1e",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88476t.jpg?s=0dcaf8e0720f4a54712da5423b63bd1e",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88476l.jpg?s=0dcaf8e0720f4a54712da5423b63bd1e"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88476.webp?s=0dcaf8e0720f4a54712da5423b63bd1e",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88476t.webp?s=0dcaf8e0720f4a54712da5423b63bd1e",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/88476l.webp?s=0dcaf8e0720f4a54712da5423b63bd1e"
                }
            },
            "title": "Mahoutsukai no Yome"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/35062-52991",
        "votes": 2
    },
    {
        "entry": {
            "mal_id": 477,
            "url": "https:\/\/myanimelist.net\/anime\/477\/Aria_the_Animation",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/77620.jpg?s=5c694f2a87af08c8954cd89f67ba38b7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/77620t.jpg?s=5c694f2a87af08c8954cd89f67ba38b7",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/77620l.jpg?s=5c694f2a87af08c8954cd89f67ba38b7"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/77620.webp?s=5c694f2a87af08c8954cd89f67ba38b7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/77620t.webp?s=5c694f2a87af08c8954cd89f67ba38b7",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/77620l.webp?s=5c694f2a87af08c8954cd89f67ba38b7"
                }
            },
            "title": "Aria the Animation"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/477-52991",
        "votes": 2
    },
    {
        "entry": {
            "mal_id": 5114,
            "url": "https:\/\/myanimelist.net\/anime\/5114\/Fullmetal_Alchemist__Brotherhood",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745t.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745l.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745.webp?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745t.webp?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745l.webp?s=7892d01b6c74f1bf945f7a3ff3bb1f6a"
                }
            },
            "title": "Fullmetal Alchemist: Brotherhood"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/5114-52991",
        "votes": 2
    },
    {
        "entry": {
            "mal_id": 42826,
            "url": "https:\/\/myanimelist.net\/anime\/42826\/Seijo_no_Maryoku_wa_Bannou_desu",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1947\/114235.jpg?s=9e37dcd9aedf9427d28b8bc226799028",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1947\/114235t.jpg?s=9e37dcd9aedf9427d28b8bc226799028",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1947\/114235l.jpg?s=9e37dcd9aedf9427d28b8bc226799028"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1947\/114235.webp?s=9e37dcd9aedf9427d28b8bc226799028",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1947\/114235t.webp?s=9e37dcd9aedf9427d28b8bc226799028",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1947\/114235l.webp?s=9e37dcd9aedf9427d28b8bc226799028"
                }
            },
            "title": "Seijo no Maryoku wa Bannou desu"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/42826-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 45576,
            "url": "https:\/\/myanimelist.net\/anime\/45576\/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1028\/117777.jpg?s=99ecca20cac2345fc956fda60a5e025f",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1028\/117777t.jpg?s=99ecca20cac2345fc956fda60a5e025f",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1028\/117777l.jpg?s=99ecca20cac2345fc956fda60a5e025f"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1028\/117777.webp?s=99ecca20cac2345fc956fda60a5e025f",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1028\/117777t.webp?s=99ecca20cac2345fc956fda60a5e025f",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1028\/117777l.webp?s=99ecca20cac2345fc956fda60a5e025f"
                }
            },
            "title": "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/45576-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 46095,
            "url": "https:\/\/myanimelist.net\/anime\/46095\/Vivy__Fluorite_Eyes_Song",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1637\/115052.jpg?s=3ae12e5655172683b122c2d0f32c257d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1637\/115052t.jpg?s=3ae12e5655172683b122c2d0f32c257d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1637\/115052l.jpg?s=3ae12e5655172683b122c2d0f32c257d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1637\/115052.webp?s=3ae12e5655172683b122c2d0f32c257d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1637\/115052t.webp?s=3ae12e5655172683b122c2d0f32c257d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1637\/115052l.webp?s=3ae12e5655172683b122c2d0f32c257d"
                }
            },
            "title": "Vivy: Fluorite Eye's Song"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/46095-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 38000,
            "url": "https:\/\/myanimelist.net\/anime\/38000\/Kimetsu_no_Yaiba",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1286\/99889.jpg?s=e497d08bef31ae412e314b90a54acfda",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1286\/99889t.jpg?s=e497d08bef31ae412e314b90a54acfda",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1286\/99889l.jpg?s=e497d08bef31ae412e314b90a54acfda"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1286\/99889.webp?s=e497d08bef31ae412e314b90a54acfda",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1286\/99889t.webp?s=e497d08bef31ae412e314b90a54acfda",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1286\/99889l.webp?s=e497d08bef31ae412e314b90a54acfda"
                }
            },
            "title": "Kimetsu no Yaiba"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/38000-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 54492,
            "url": "https:\/\/myanimelist.net\/anime\/54492\/Kusuriya_no_Hitorigoto",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1708\/138033.jpg?s=d4e90b2101936cdf0002e35ebf5b556b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1708\/138033t.jpg?s=d4e90b2101936cdf0002e35ebf5b556b",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1708\/138033l.jpg?s=d4e90b2101936cdf0002e35ebf5b556b"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1708\/138033.webp?s=d4e90b2101936cdf0002e35ebf5b556b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1708\/138033t.webp?s=d4e90b2101936cdf0002e35ebf5b556b",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1708\/138033l.webp?s=d4e90b2101936cdf0002e35ebf5b556b"
                }
            },
            "title": "Kusuriya no Hitorigoto"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/52991-54492",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 30276,
            "url": "https:\/\/myanimelist.net\/anime\/30276\/One_Punch_Man",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76049t.jpg?s=40b6c7dbbbb94c44675116d301150078",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76049l.jpg?s=40b6c7dbbbb94c44675116d301150078"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76049.webp?s=40b6c7dbbbb94c44675116d301150078",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76049t.webp?s=40b6c7dbbbb94c44675116d301150078",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/12\/76049l.webp?s=40b6c7dbbbb94c44675116d301150078"
                }
            },
            "title": "One Punch Man"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/30276-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 40778,
            "url": "https:\/\/myanimelist.net\/anime\/40778\/Planetarian__Snow_Globe",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1169\/113365.jpg?s=871caa2a6d0ecff17056c4d5f47dbf02",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1169\/113365t.jpg?s=871caa2a6d0ecff17056c4d5f47dbf02",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1169\/113365l.jpg?s=871caa2a6d0ecff17056c4d5f47dbf02"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1169\/113365.webp?s=871caa2a6d0ecff17056c4d5f47dbf02",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1169\/113365t.webp?s=871caa2a6d0ecff17056c4d5f47dbf02",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1169\/113365l.webp?s=871caa2a6d0ecff17056c4d5f47dbf02"
                }
            },
            "title": "Planetarian: Snow Globe"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/40778-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 52299,
            "url": "https:\/\/myanimelist.net\/anime\/52299\/Ore_dake_Level_Up_na_Ken",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1801\/142390.jpg?s=2401304ae9d2006f8d83076579de6630",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1801\/142390t.jpg?s=2401304ae9d2006f8d83076579de6630",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1801\/142390l.jpg?s=2401304ae9d2006f8d83076579de6630"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1801\/142390.webp?s=2401304ae9d2006f8d83076579de6630",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1801\/142390t.webp?s=2401304ae9d2006f8d83076579de6630",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1801\/142390l.webp?s=2401304ae9d2006f8d83076579de6630"
                }
            },
            "title": "Ore dake Level Up na Ken"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/52299-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 36094,
            "url": "https:\/\/myanimelist.net\/anime\/36094\/Hakumei_to_Mikochi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1250\/91694.jpg?s=958eb4cb26e0307069a0550879db04ad",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1250\/91694t.jpg?s=958eb4cb26e0307069a0550879db04ad",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1250\/91694l.jpg?s=958eb4cb26e0307069a0550879db04ad"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1250\/91694.webp?s=958eb4cb26e0307069a0550879db04ad",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1250\/91694t.webp?s=958eb4cb26e0307069a0550879db04ad",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1250\/91694l.webp?s=958eb4cb26e0307069a0550879db04ad"
                }
            },
            "title": "Hakumei to Mikochi"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/36094-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 9969,
            "url": "https:\/\/myanimelist.net\/anime\/9969\/Gintama",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50361.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50361t.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50361l.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50361.webp?s=b3a061db8c3d42a055d58f9df1f3dac7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50361t.webp?s=b3a061db8c3d42a055d58f9df1f3dac7",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50361l.webp?s=b3a061db8c3d42a055d58f9df1f3dac7"
                }
            },
            "title": "Gintama'"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/9969-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 387,
            "url": "https:\/\/myanimelist.net\/anime\/387\/Haibane_Renmei",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/13134.jpg?s=7374607a6b33488ad66b2924fe97e19a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/13134t.jpg?s=7374607a6b33488ad66b2924fe97e19a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/13134l.jpg?s=7374607a6b33488ad66b2924fe97e19a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/13134.webp?s=7374607a6b33488ad66b2924fe97e19a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/13134t.webp?s=7374607a6b33488ad66b2924fe97e19a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/13134l.webp?s=7374607a6b33488ad66b2924fe97e19a"
                }
            },
            "title": "Haibane Renmei"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/387-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 22789,
            "url": "https:\/\/myanimelist.net\/anime\/22789\/Barakamon",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1426\/111248.jpg?s=8abf35da87707ea81557e0287f88eb76",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1426\/111248t.jpg?s=8abf35da87707ea81557e0287f88eb76",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1426\/111248l.jpg?s=8abf35da87707ea81557e0287f88eb76"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1426\/111248.webp?s=8abf35da87707ea81557e0287f88eb76",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1426\/111248t.webp?s=8abf35da87707ea81557e0287f88eb76",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1426\/111248l.webp?s=8abf35da87707ea81557e0287f88eb76"
                }
            },
            "title": "Barakamon"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/22789-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 268,
            "url": "https:\/\/myanimelist.net\/anime\/268\/Golden_Boy",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/62867.jpg?s=1fc891d40870585d7957121152b79da1",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/62867t.jpg?s=1fc891d40870585d7957121152b79da1",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/62867l.jpg?s=1fc891d40870585d7957121152b79da1"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/62867.webp?s=1fc891d40870585d7957121152b79da1",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/62867t.webp?s=1fc891d40870585d7957121152b79da1",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/3\/62867l.webp?s=1fc891d40870585d7957121152b79da1"
                }
            },
            "title": "Golden Boy"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/268-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 53590,
            "url": "https:\/\/myanimelist.net\/anime\/53590\/Saijaku_Tamer_wa_Gomi_Hiroi_no_Tabi_wo_Hajimemashita",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1280\/138474.jpg?s=4866fb13509cec3ee02223b8a04897de",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1280\/138474t.jpg?s=4866fb13509cec3ee02223b8a04897de",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1280\/138474l.jpg?s=4866fb13509cec3ee02223b8a04897de"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1280\/138474.webp?s=4866fb13509cec3ee02223b8a04897de",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1280\/138474t.webp?s=4866fb13509cec3ee02223b8a04897de",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1280\/138474l.webp?s=4866fb13509cec3ee02223b8a04897de"
                }
            },
            "title": "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita."
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/52991-53590",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 31859,
            "url": "https:\/\/myanimelist.net\/anime\/31859\/Hai_to_Gensou_no_Grimgar",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/77976.jpg?s=8c71c6fcbf36ce3a81393156af3f21bd",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/77976t.jpg?s=8c71c6fcbf36ce3a81393156af3f21bd",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/77976l.jpg?s=8c71c6fcbf36ce3a81393156af3f21bd"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/77976.webp?s=8c71c6fcbf36ce3a81393156af3f21bd",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/77976t.webp?s=8c71c6fcbf36ce3a81393156af3f21bd",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/77976l.webp?s=8c71c6fcbf36ce3a81393156af3f21bd"
                }
            },
            "title": "Hai to Gensou no Grimgar"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/31859-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 1827,
            "url": "https:\/\/myanimelist.net\/anime\/1827\/Seirei_no_Moribito",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50337.jpg?s=28b92b1f8b65ee90d31b996390e7b1a7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50337t.jpg?s=28b92b1f8b65ee90d31b996390e7b1a7",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50337l.jpg?s=28b92b1f8b65ee90d31b996390e7b1a7"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50337.webp?s=28b92b1f8b65ee90d31b996390e7b1a7",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50337t.webp?s=28b92b1f8b65ee90d31b996390e7b1a7",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/50337l.webp?s=28b92b1f8b65ee90d31b996390e7b1a7"
                }
            },
            "title": "Seirei no Moribito"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/1827-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 29803,
            "url": "https:\/\/myanimelist.net\/anime\/29803\/Overlord",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/88019.jpg?s=79b1142c4818577b9925017b0240131a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/88019t.jpg?s=79b1142c4818577b9925017b0240131a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/88019l.jpg?s=79b1142c4818577b9925017b0240131a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/88019.webp?s=79b1142c4818577b9925017b0240131a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/88019t.webp?s=79b1142c4818577b9925017b0240131a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/88019l.webp?s=79b1142c4818577b9925017b0240131a"
                }
            },
            "title": "Overlord"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/29803-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 30370,
            "url": "https:\/\/myanimelist.net\/anime\/30370\/Akatsuki_no_Yona_OVA",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/75974.jpg?s=ed578f7f922dede0e8d6ae99d24b3a92",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/75974t.jpg?s=ed578f7f922dede0e8d6ae99d24b3a92",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/75974l.jpg?s=ed578f7f922dede0e8d6ae99d24b3a92"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/75974.webp?s=ed578f7f922dede0e8d6ae99d24b3a92",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/75974t.webp?s=ed578f7f922dede0e8d6ae99d24b3a92",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/75974l.webp?s=ed578f7f922dede0e8d6ae99d24b3a92"
                }
            },
            "title": "Akatsuki no Yona OVA"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/30370-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 1,
            "url": "https:\/\/myanimelist.net\/anime\/1\/Cowboy_Bebop",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644.jpg?s=bb1e96eb0a0224a57aa45443eab92575",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644t.jpg?s=bb1e96eb0a0224a57aa45443eab92575",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644l.jpg?s=bb1e96eb0a0224a57aa45443eab92575"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644.webp?s=bb1e96eb0a0224a57aa45443eab92575",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644t.webp?s=bb1e96eb0a0224a57aa45443eab92575",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644l.webp?s=bb1e96eb0a0224a57aa45443eab92575"
                }
            },
            "title": "Cowboy Bebop"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/1-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 40716,
            "url": "https:\/\/myanimelist.net\/anime\/40716\/Kakushigoto",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1048\/128385.jpg?s=113d574d67f907f6bec9ccf1ca7ad508",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1048\/128385t.jpg?s=113d574d67f907f6bec9ccf1ca7ad508",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1048\/128385l.jpg?s=113d574d67f907f6bec9ccf1ca7ad508"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1048\/128385.webp?s=113d574d67f907f6bec9ccf1ca7ad508",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1048\/128385t.webp?s=113d574d67f907f6bec9ccf1ca7ad508",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1048\/128385l.webp?s=113d574d67f907f6bec9ccf1ca7ad508"
                }
            },
            "title": "Kakushigoto"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/40716-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 16009,
            "url": "https:\/\/myanimelist.net\/anime\/16009\/Kamisama_no_Inai_Nichiyoubi",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/52127.jpg?s=7cfedfda139703e2aec2a378a6bc199d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/52127t.jpg?s=7cfedfda139703e2aec2a378a6bc199d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/52127l.jpg?s=7cfedfda139703e2aec2a378a6bc199d"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/52127.webp?s=7cfedfda139703e2aec2a378a6bc199d",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/52127t.webp?s=7cfedfda139703e2aec2a378a6bc199d",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/2\/52127l.webp?s=7cfedfda139703e2aec2a378a6bc199d"
                }
            },
            "title": "Kamisama no Inai Nichiyoubi"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/16009-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 52081,
            "url": "https:\/\/myanimelist.net\/anime\/52081\/Edomae_Elf",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1171\/133777.jpg?s=e8de934f95ba967213033b888f09bd0b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1171\/133777t.jpg?s=e8de934f95ba967213033b888f09bd0b",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1171\/133777l.jpg?s=e8de934f95ba967213033b888f09bd0b"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1171\/133777.webp?s=e8de934f95ba967213033b888f09bd0b",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1171\/133777t.webp?s=e8de934f95ba967213033b888f09bd0b",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1171\/133777l.webp?s=e8de934f95ba967213033b888f09bd0b"
                }
            },
            "title": "Edomae Elf"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/52081-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 975,
            "url": "https:\/\/myanimelist.net\/anime\/975\/Yokohama_Kaidashi_Kikou",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23054.jpg?s=9b49a69258d0f515fe7c9e0457dff6c0",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23054t.jpg?s=9b49a69258d0f515fe7c9e0457dff6c0",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23054l.jpg?s=9b49a69258d0f515fe7c9e0457dff6c0"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23054.webp?s=9b49a69258d0f515fe7c9e0457dff6c0",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23054t.webp?s=9b49a69258d0f515fe7c9e0457dff6c0",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/6\/23054l.webp?s=9b49a69258d0f515fe7c9e0457dff6c0"
                }
            },
            "title": "Yokohama Kaidashi Kikou"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/975-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 33091,
            "url": "https:\/\/myanimelist.net\/anime\/33091\/Planetarian__Chiisana_Hoshi_no_Yume",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/80753.jpg?s=f13d642eaed190f567a9c326367b3900",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/80753t.jpg?s=f13d642eaed190f567a9c326367b3900",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/80753l.jpg?s=f13d642eaed190f567a9c326367b3900"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/80753.webp?s=f13d642eaed190f567a9c326367b3900",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/80753t.webp?s=f13d642eaed190f567a9c326367b3900",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/11\/80753l.webp?s=f13d642eaed190f567a9c326367b3900"
                }
            },
            "title": "Planetarian: Chiisana Hoshi no Yume"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/33091-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 48779,
            "url": "https:\/\/myanimelist.net\/anime\/48779\/Deaimon",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1054\/121949.jpg?s=7b966dc196bf2594fbe9eda0ccaaf63a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1054\/121949t.jpg?s=7b966dc196bf2594fbe9eda0ccaaf63a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1054\/121949l.jpg?s=7b966dc196bf2594fbe9eda0ccaaf63a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1054\/121949.webp?s=7b966dc196bf2594fbe9eda0ccaaf63a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1054\/121949t.webp?s=7b966dc196bf2594fbe9eda0ccaaf63a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1054\/121949l.webp?s=7b966dc196bf2594fbe9eda0ccaaf63a"
                }
            },
            "title": "Deaimon"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/48779-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 35079,
            "url": "https:\/\/myanimelist.net\/anime\/35079\/Kino_no_Tabi__The_Beautiful_World_-_The_Animated_Series",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/87235.jpg?s=6ab2fa1ae9db59c22979ed40c6ca90b0",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/87235t.jpg?s=6ab2fa1ae9db59c22979ed40c6ca90b0",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/87235l.jpg?s=6ab2fa1ae9db59c22979ed40c6ca90b0"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/87235.webp?s=6ab2fa1ae9db59c22979ed40c6ca90b0",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/87235t.webp?s=6ab2fa1ae9db59c22979ed40c6ca90b0",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/13\/87235l.webp?s=6ab2fa1ae9db59c22979ed40c6ca90b0"
                }
            },
            "title": "Kino no Tabi: The Beautiful World - The Animated Series"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/35079-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 55731,
            "url": "https:\/\/myanimelist.net\/anime\/55731\/Wu_Nao_Monu",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1386\/136705.jpg?s=bb5daa606704556b6d937e25c8684b5a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1386\/136705t.jpg?s=bb5daa606704556b6d937e25c8684b5a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1386\/136705l.jpg?s=bb5daa606704556b6d937e25c8684b5a"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1386\/136705.webp?s=bb5daa606704556b6d937e25c8684b5a",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1386\/136705t.webp?s=bb5daa606704556b6d937e25c8684b5a",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1386\/136705l.webp?s=bb5daa606704556b6d937e25c8684b5a"
                }
            },
            "title": "Wu Nao Monu"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/52991-55731",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 6,
            "url": "https:\/\/myanimelist.net\/anime\/6\/Trigun",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/20310.jpg?s=0a1be11b2b831d3b50747ec526e5f8fd",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/20310t.jpg?s=0a1be11b2b831d3b50747ec526e5f8fd",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/20310l.jpg?s=0a1be11b2b831d3b50747ec526e5f8fd"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/20310.webp?s=0a1be11b2b831d3b50747ec526e5f8fd",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/20310t.webp?s=0a1be11b2b831d3b50747ec526e5f8fd",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/7\/20310l.webp?s=0a1be11b2b831d3b50747ec526e5f8fd"
                }
            },
            "title": "Trigun"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/6-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 232,
            "url": "https:\/\/myanimelist.net\/anime\/232\/Cardcaptor_Sakura",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/60781.jpg?s=ceceafe46ce85611604b1b0e5d2d7dad",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/60781t.jpg?s=ceceafe46ce85611604b1b0e5d2d7dad",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/60781l.jpg?s=ceceafe46ce85611604b1b0e5d2d7dad"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/60781.webp?s=ceceafe46ce85611604b1b0e5d2d7dad",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/60781t.webp?s=ceceafe46ce85611604b1b0e5d2d7dad",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/8\/60781l.webp?s=ceceafe46ce85611604b1b0e5d2d7dad"
                }
            },
            "title": "Cardcaptor Sakura"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/232-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 39575,
            "url": "https:\/\/myanimelist.net\/anime\/39575\/Somali_to_Mori_no_Kamisama",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1938\/102796.jpg?s=7704908b74d29e2631ca5dcaf140aa8f",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1938\/102796t.jpg?s=7704908b74d29e2631ca5dcaf140aa8f",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1938\/102796l.jpg?s=7704908b74d29e2631ca5dcaf140aa8f"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1938\/102796.webp?s=7704908b74d29e2631ca5dcaf140aa8f",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1938\/102796t.webp?s=7704908b74d29e2631ca5dcaf140aa8f",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1938\/102796l.webp?s=7704908b74d29e2631ca5dcaf140aa8f"
                }
            },
            "title": "Somali to Mori no Kamisama"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/39575-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 49345,
            "url": "https:\/\/myanimelist.net\/anime\/49345\/Goodbye_Don_Glees",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1568\/117628.jpg?s=3b58e3cf1b2e4d1035d1e9ecca8423a2",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1568\/117628t.jpg?s=3b58e3cf1b2e4d1035d1e9ecca8423a2",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1568\/117628l.jpg?s=3b58e3cf1b2e4d1035d1e9ecca8423a2"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1568\/117628.webp?s=3b58e3cf1b2e4d1035d1e9ecca8423a2",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1568\/117628t.webp?s=3b58e3cf1b2e4d1035d1e9ecca8423a2",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1568\/117628l.webp?s=3b58e3cf1b2e4d1035d1e9ecca8423a2"
                }
            },
            "title": "Goodbye, Don Glees!"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/49345-52991",
        "votes": 1
    },
    {
        "entry": {
            "mal_id": 30,
            "url": "https:\/\/myanimelist.net\/anime\/30\/Shinseiki_Evangelion",
            "images": {
                "jpg": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1314\/108941.jpg?s=8055a0c1ad69357576fc40b690b63b03",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1314\/108941t.jpg?s=8055a0c1ad69357576fc40b690b63b03",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1314\/108941l.jpg?s=8055a0c1ad69357576fc40b690b63b03"
                },
                "webp": {
                    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1314\/108941.webp?s=8055a0c1ad69357576fc40b690b63b03",
                    "small_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1314\/108941t.webp?s=8055a0c1ad69357576fc40b690b63b03",
                    "large_image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1314\/108941l.webp?s=8055a0c1ad69357576fc40b690b63b03"
                }
            },
            "title": "Shinseiki Evangelion"
        },
        "url": "https:\/\/myanimelist.net\/recommendations\/anime\/30-52991",
        "votes": 1
    }
]


const AnimeDetails = () => {

    // const [data, setData] = useState(false)
    const [more, setMore] = useState(false)
    // const [characters, setCharacters] = useState(false)
    // const [morePics, setMorePics] = useState(false)
    // const [moreVideos, setMoreVideos] = useState(false)
    // const [recommend, setRecommend] = useState(false)

    const navigate = useNavigate()

    const params = useParams();

    const getAnimeDetails = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}`)
        setData(data.data)
    }

    const getCharacters = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}/characters`)
        setCharacters(data.data)
    }

    const getMorePictures = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}/pictures`)
        setMorePics(data.data)
    }

    const getMoreVideos = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}/videos`)
        setMoreVideos(data.data?.promo)
    }

    const getRecommendation = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}/recommendations`)
        setRecommend(data.data);
    }

    useEffect(() => {
        // getAnimeDetails();
        // getMorePictures();
        // getMoreVideos();
        // getCharacters();
        // getRecommendation();
    }, [params])

    return (
        <div>
            <div className='flex flex-col gap-20 p-8 pt-[20px] sm:pt-[100px]'>

                {/* DETIALS */}
                {data && <div className='flex flex-col sm:flex-row gap-5'>

                    <div className='flex justify-center items-center'>
                        <img className='w-[800px]' src={data.images.webp.large_image_url} alt="" srcset="" />
                    </div>

                    <div className='flex flex-col gap-2 justify-evenly items-start text-[15px] sm:text-[20px]'>
                        <p>Title : <span className='text-red-600'>{data.title}</span></p>
                        <p>Source : <span className='text-red-600'>{data.source}</span></p>
                        <p>Duration : <span className='text-red-600'>{data.duration}</span></p>
                        <p>Rating : <span className='text-red-600'>{data.score}</span></p>
                        <p className='text-yellow-200 flex gap-4'>{data.genres.map((e) => (<span key={e.mal_id} className='bg-teal-500 rounded-md px-2 py-1'>{e.name}</span>))}</p>
                        <p>Description : <span className='text-red-600'>{data.synopsis.split(" ").slice(0, 25).join(" ")}</span> <span className='text-1xl text-gray-400' onClick={() => setMore(!more)}>Read more...</span></p>
                    </div>
                </div>}

                {/* MORE PHOTOS */}
                {morePics && <div className='flex flex-col gap-2 overflow-scroll'>
                    <h1 className='text-2xl'>Photos</h1>
                    <div className='w-full flex gap-5'>
                        {morePics.map((e, i) => (<div key={i} className='w-[100px] h-[200px] sm:w-[100px] sm:h-[200px] flex-shrink-0'><MyImage src={e.webp.image_url} width={"100%"} height={"100%"} /></div>))}
                    </div>
                </div>}

                {/* SHOWING YOUTUBE VIDEOS */}
                {data && <div className='flex justify-center items-center'>
                    <iframe className='w-[250px] h-[200px] sm:w-[600px] sm:h-[400px] bg-white p-4' src={data.trailer.embed_url} frameborder="0"></iframe>
                </div>}

                {/* MORE VIDEOS */}
                {moreVideos && <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl Photos'>Videos</h1>
                    <div className='flex gap-2 overflow-scroll'>
                        {moreVideos.map((e) => (<div key={e.mal_id} className='flex-shrink-0'>
                            <iframe className='w-[150px] h-[100px] sm:w-[300px] sm:h-[200px] bg-white p-4' src={e.trailer.embed_url + "?autoplay=0"} frameborder="0" F></iframe>
                        </div>))}
                    </div>
                </div>}

                {/* SHOWING ALL CHARACTERS */}
                {characters && <div className='flex justify-center gap-4 flex-wrap px-10'>
                    {characters.map((e) => (<div key={e.mal_id} onClick={() => navigate(`/characterDetails/${e.character.mal_id}`)} className='flex flex-col gap-2 w-[120px] sm:w-[200px] bg-white p-2 hover:cursor-pointer'>
                        <div className='w-[100px] h-[150px] sm:w-[180px] sm:h-[250px]'>
                            <MyImage src={e.character.images.webp.image_url} width="100%" height="100%" />
                        </div>
                        <p>{e.character.name}</p>
                    </div>))}
                </div>}

                {/* SHOWING RECOMMENDATION */}
                {recommend && <div className='flex flex-col gap-2 overflow-scroll'>
                    <h1 className='text-2xl'>Recommendations</h1>
                    <div className='flex gap-5'>
                        {recommend.map((e) => (<div key={e.mal_id} onClick={() => navigate(`/animeDetails/${e.entry.mal_id}`)} className='flex flex-col gap-1 flex-shrink-0 w-[100px] h-[200px] sm:w-[225px] sm:h-[340px]'>
                            <MyImage src={e.entry.images.webp.image_url} width={"100%"} height={"100%"} />
                            <p>{e.entry.name}</p>
                        </div>))}
                    </div>
                </div>}

                {/* POP BOX TO SHOW FULL DESCRIPTION */}
                {
                    more && <div onClick={() => setMore(!more)} className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-tr from-black p-10 overflow-scroll'>
                        <div onClick={(e) => e.stopPropagation()} className='w-[60%] h-[70%] text-white bg-pink-500 p-5'>{data.synopsis}</div>
                    </div>
                }

            </div >
        </div >
    )
}

export default AnimeDetails