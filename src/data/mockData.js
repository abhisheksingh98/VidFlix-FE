// ============================================================
// VidFlix Mock Data — replaces all YouTube Data API calls
// ============================================================

// ---- Helpers ----------------------------------------------------------------
const ago = (days) => {
    const d = new Date()
    d.setDate(d.getDate() - days)
    return d.toISOString()
}

const thumb = (seed, w = 320, h = 180) =>
    `https://picsum.photos/seed/${seed}/${w}/${h}`

const avatar = (seed, size = 88) =>
    `https://picsum.photos/seed/${seed}-av/${size}/${size}`

// ---- Channels ---------------------------------------------------------------
export const MOCK_CHANNELS = {
    ch_react: {
        id: 'ch_react',
        snippet: {
            title: 'React Masters',
            description:
                'Deep-dives into React, hooks, Redux and the modern JS ecosystem.',
            thumbnails: {
                default: { url: avatar('react', 88) },
                medium: { url: avatar('react', 240) },
            },
            publishedAt: ago(900),
            country: 'US',
        },
        statistics: {
            subscriberCount: '284000',
            viewCount: '12400000',
            videoCount: '142',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_react_uploads' },
        },
    },
    ch_webdev: {
        id: 'ch_webdev',
        snippet: {
            title: 'WebDev Simplified',
            description:
                'Making web development simpler, one video at a time.',
            thumbnails: {
                default: { url: avatar('webdev', 88) },
                medium: { url: avatar('webdev', 240) },
            },
            publishedAt: ago(1200),
            country: 'CA',
        },
        statistics: {
            subscriberCount: '1200000',
            viewCount: '67000000',
            videoCount: '380',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_webdev_uploads' },
        },
    },
    ch_music: {
        id: 'ch_music',
        snippet: {
            title: 'Acoustic Sessions',
            description: 'Original music and covers, recorded live.',
            thumbnails: {
                default: { url: avatar('music', 88) },
                medium: { url: avatar('music', 240) },
            },
            publishedAt: ago(700),
            country: 'GB',
        },
        statistics: {
            subscriberCount: '89000',
            viewCount: '3400000',
            videoCount: '54',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_music_uploads' },
        },
    },
    ch_algo: {
        id: 'ch_algo',
        snippet: {
            title: 'Algorithm Art',
            description:
                'Visualizing sorting, graph traversal and generative art with code.',
            thumbnails: {
                default: { url: avatar('algo', 88) },
                medium: { url: avatar('algo', 240) },
            },
            publishedAt: ago(600),
            country: 'DE',
        },
        statistics: {
            subscriberCount: '430000',
            viewCount: '18000000',
            videoCount: '98',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_algo_uploads' },
        },
    },
    ch_cricket: {
        id: 'ch_cricket',
        snippet: {
            title: 'Cricket Central',
            description: 'Highlights, analysis and live coverage of cricket worldwide.',
            thumbnails: {
                default: { url: avatar('cricket', 88) },
                medium: { url: avatar('cricket', 240) },
            },
            publishedAt: ago(1500),
            country: 'IN',
        },
        statistics: {
            subscriberCount: '3200000',
            viewCount: '140000000',
            videoCount: '2100',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_cricket_uploads' },
        },
    },
    ch_football: {
        id: 'ch_football',
        snippet: {
            title: 'Football Weekly',
            description: 'Premier League, Champions League and World Cup coverage.',
            thumbnails: {
                default: { url: avatar('football', 88) },
                medium: { url: avatar('football', 240) },
            },
            publishedAt: ago(1800),
            country: 'ES',
        },
        statistics: {
            subscriberCount: '5100000',
            viewCount: '320000000',
            videoCount: '4800',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_football_uploads' },
        },
    },
    ch_coding: {
        id: 'ch_coding',
        snippet: {
            title: 'Code With Abhishek',
            description: 'Full-stack tutorials: Node.js, React, Docker and more.',
            thumbnails: {
                default: { url: avatar('coding', 88) },
                medium: { url: avatar('coding', 240) },
            },
            publishedAt: ago(400),
            country: 'IN',
        },
        statistics: {
            subscriberCount: '67000',
            viewCount: '2100000',
            videoCount: '76',
        },
        contentDetails: {
            relatedPlaylists: { uploads: 'pl_coding_uploads' },
        },
    },
}

// ---- Videos -----------------------------------------------------------------
export const MOCK_VIDEOS = [
    {
        id: 'v001',
        snippet: {
            channelId: 'ch_react',
            channelTitle: 'React Masters',
            title: 'React Hooks Explained — useState, useEffect & useContext',
            description:
                'A comprehensive guide to all core React hooks. We cover useState for local state, useEffect for side effects, and useContext for sharing data without prop drilling.',
            publishedAt: ago(3),
            thumbnails: {
                medium: { url: thumb('react1', 320, 180) },
                default: { url: thumb('react1', 120, 90) },
            },
            tags: ['React js', 'Hooks', 'Coding'],
        },
        statistics: {
            viewCount: '1240000',
            likeCount: '48200',
            dislikeCount: '320',
            commentCount: '1842',
        },
        contentDetails: { duration: 'PT18M42S', videoId: 'v001' },
    },
    {
        id: 'v002',
        snippet: {
            channelId: 'ch_webdev',
            channelTitle: 'WebDev Simplified',
            title: 'Redux Toolkit in 30 Minutes — Complete Crash Course',
            description:
                'Redux Toolkit is the official, opinionated way to write Redux logic. In this video we build a fully working counter and todo app using createSlice and RTK Query.',
            publishedAt: ago(7),
            thumbnails: {
                medium: { url: thumb('redux1', 320, 180) },
                default: { url: thumb('redux1', 120, 90) },
            },
            tags: ['Redux', 'React js', 'Coding'],
        },
        statistics: {
            viewCount: '870000',
            likeCount: '31400',
            dislikeCount: '210',
            commentCount: '920',
        },
        contentDetails: { duration: 'PT31M05S', videoId: 'v002' },
    },
    {
        id: 'v003',
        snippet: {
            channelId: 'ch_algo',
            channelTitle: 'Algorithm Art',
            title: 'Visualizing Bubble Sort with Canvas API',
            description:
                'Watch bubble sort come to life with animated bars using the HTML5 Canvas API and vanilla JavaScript. No frameworks, just pure code and math.',
            publishedAt: ago(12),
            thumbnails: {
                medium: { url: thumb('algo1', 320, 180) },
                default: { url: thumb('algo1', 120, 90) },
            },
            tags: ['Algorithm Art', 'Coding', 'use of API'],
        },
        statistics: {
            viewCount: '540000',
            likeCount: '22100',
            dislikeCount: '98',
            commentCount: '430',
        },
        contentDetails: { duration: 'PT12M18S', videoId: 'v003' },
    },
    {
        id: 'v004',
        snippet: {
            channelId: 'ch_music',
            channelTitle: 'Acoustic Sessions',
            title: 'Shape of You — Acoustic Guitar Cover (Ed Sheeran)',
            description:
                'My acoustic fingerstyle cover of Ed Sheeran\'s Shape of You. Tabs available on Patreon.',
            publishedAt: ago(20),
            thumbnails: {
                medium: { url: thumb('guitar1', 320, 180) },
                default: { url: thumb('guitar1', 120, 90) },
            },
            tags: ['Guitar', 'Music', 'Bengali Songs'],
        },
        statistics: {
            viewCount: '2100000',
            likeCount: '84000',
            dislikeCount: '700',
            commentCount: '3200',
        },
        contentDetails: { duration: 'PT4M22S', videoId: 'v004' },
    },
    {
        id: 'v005',
        snippet: {
            channelId: 'ch_cricket',
            channelTitle: 'Cricket Central',
            title: 'India vs Australia 3rd ODI — Full Highlights 2024',
            description:
                'Watch the full highlights of the dramatic 3rd ODI between India and Australia. Rohit\'s century steers India to a 6-wicket win.',
            publishedAt: ago(2),
            thumbnails: {
                medium: { url: thumb('cricket1', 320, 180) },
                default: { url: thumb('cricket1', 120, 90) },
            },
            tags: ['Cricket', 'India', 'Sports'],
        },
        statistics: {
            viewCount: '9800000',
            likeCount: '321000',
            dislikeCount: '4200',
            commentCount: '18400',
        },
        contentDetails: { duration: 'PT28M55S', videoId: 'v005' },
    },
    {
        id: 'v006',
        snippet: {
            channelId: 'ch_football',
            channelTitle: 'Football Weekly',
            title: 'Real Madrid 4-0 Barcelona — El Clásico Full Highlights',
            description:
                'Real Madrid dominate El Clásico with a devastating display. Bellingham and Vinícius in outstanding form.',
            publishedAt: ago(5),
            thumbnails: {
                medium: { url: thumb('football1', 320, 180) },
                default: { url: thumb('football1', 120, 90) },
            },
            tags: ['Real Madrid', 'Football', 'El Clasico'],
        },
        statistics: {
            viewCount: '14000000',
            likeCount: '520000',
            dislikeCount: '9100',
            commentCount: '42000',
        },
        contentDetails: { duration: 'PT22M10S', videoId: 'v006' },
    },
    {
        id: 'v007',
        snippet: {
            channelId: 'ch_react',
            channelTitle: 'React Masters',
            title: 'React Native Navigation — Stack, Tab & Drawer in One App',
            description:
                'We build a production-ready React Native app with React Navigation v6 covering stack navigator, bottom tab navigator and drawer navigator all in one project.',
            publishedAt: ago(15),
            thumbnails: {
                medium: { url: thumb('rn1', 320, 180) },
                default: { url: thumb('rn1', 120, 90) },
            },
            tags: ['React Native', 'React js', 'Coding'],
        },
        statistics: {
            viewCount: '680000',
            likeCount: '27600',
            dislikeCount: '180',
            commentCount: '740',
        },
        contentDetails: { duration: 'PT44M30S', videoId: 'v007' },
    },
    {
        id: 'v008',
        snippet: {
            channelId: 'ch_coding',
            channelTitle: 'Code With Abhishek',
            title: 'Build a REST API with Node.js & Express in 1 Hour',
            description:
                'From zero to a fully documented REST API with authentication, rate limiting and Swagger docs. We use Express, JWT and MongoDB.',
            publishedAt: ago(8),
            thumbnails: {
                medium: { url: thumb('node1', 320, 180) },
                default: { url: thumb('node1', 120, 90) },
            },
            tags: ['Coding', 'Node.js', 'use of API'],
        },
        statistics: {
            viewCount: '430000',
            likeCount: '18200',
            dislikeCount: '90',
            commentCount: '620',
        },
        contentDetails: { duration: 'PT58M44S', videoId: 'v008' },
    },
    {
        id: 'v009',
        snippet: {
            channelId: 'ch_algo',
            channelTitle: 'Algorithm Art',
            title: 'Generative Art with React and D3 — Fractal Trees',
            description:
                'Create mesmerizing animated fractal trees entirely in React using D3 for math and SVG for rendering. No canvas, no WebGL — just JSX.',
            publishedAt: ago(25),
            thumbnails: {
                medium: { url: thumb('fractal1', 320, 180) },
                default: { url: thumb('fractal1', 120, 90) },
            },
            tags: ['Algorithm Art', 'React js', 'Gatsby'],
        },
        statistics: {
            viewCount: '290000',
            likeCount: '12400',
            dislikeCount: '55',
            commentCount: '280',
        },
        contentDetails: { duration: 'PT21M08S', videoId: 'v009' },
    },
    {
        id: 'v010',
        snippet: {
            channelId: 'ch_webdev',
            channelTitle: 'WebDev Simplified',
            title: 'Angular vs React vs Vue — Which Should You Learn in 2024?',
            description:
                'An honest, data-driven comparison of the three biggest front-end frameworks. Covering learning curve, job market, performance and ecosystem.',
            publishedAt: ago(40),
            thumbnails: {
                medium: { url: thumb('angular1', 320, 180) },
                default: { url: thumb('angular1', 120, 90) },
            },
            tags: ['Angular js', 'React js', 'Coding'],
        },
        statistics: {
            viewCount: '1800000',
            likeCount: '62000',
            dislikeCount: '1800',
            commentCount: '4200',
        },
        contentDetails: { duration: 'PT24M55S', videoId: 'v010' },
    },
    {
        id: 'v011',
        snippet: {
            channelId: 'ch_music',
            channelTitle: 'Acoustic Sessions',
            title: 'Bengali Monsoon Medley — Original Composition',
            description:
                'A peaceful medley of original Bengali songs I wrote during the monsoon season. Fingerstyle guitar + vocals.',
            publishedAt: ago(60),
            thumbnails: {
                medium: { url: thumb('bengali1', 320, 180) },
                default: { url: thumb('bengali1', 120, 90) },
            },
            tags: ['Bengali Songs', 'Music', 'Guitar'],
        },
        statistics: {
            viewCount: '480000',
            likeCount: '19600',
            dislikeCount: '120',
            commentCount: '890',
        },
        contentDetails: { duration: 'PT8M14S', videoId: 'v011' },
    },
    {
        id: 'v012',
        snippet: {
            channelId: 'ch_coding',
            channelTitle: 'Code With Abhishek',
            title: 'Docker for Developers — From Zero to Deployment',
            description:
                'Learn Docker from scratch: images, containers, volumes, networking and Docker Compose. We containerize a Node.js app and deploy it to a VPS.',
            publishedAt: ago(18),
            thumbnails: {
                medium: { url: thumb('docker1', 320, 180) },
                default: { url: thumb('docker1', 120, 90) },
            },
            tags: ['Coding', 'DevOps'],
        },
        statistics: {
            viewCount: '720000',
            likeCount: '29800',
            dislikeCount: '200',
            commentCount: '980',
        },
        contentDetails: { duration: 'PT1H12M30S', videoId: 'v012' },
    },
    {
        id: 'v013',
        snippet: {
            channelId: 'ch_react',
            channelTitle: 'React Masters',
            title: 'Gatsby.js & GraphQL — Build a Blazing-Fast Blog',
            description:
                'Build a blazing-fast static blog with Gatsby, MDX and GraphQL. We cover file-system routing, image optimisation and deploying to Netlify.',
            publishedAt: ago(35),
            thumbnails: {
                medium: { url: thumb('gatsby1', 320, 180) },
                default: { url: thumb('gatsby1', 120, 90) },
            },
            tags: ['Gatsby', 'React js', 'Coding'],
        },
        statistics: {
            viewCount: '380000',
            likeCount: '15200',
            dislikeCount: '88',
            commentCount: '410',
        },
        contentDetails: { duration: 'PT38M22S', videoId: 'v013' },
    },
    {
        id: 'v014',
        snippet: {
            channelId: 'ch_football',
            channelTitle: 'Football Weekly',
            title: 'Champions League Final 2024 — Best Moments',
            description:
                'Relive the greatest moments from the 2024 UEFA Champions League Final. Goals, saves, VAR decisions and celebrations.',
            publishedAt: ago(10),
            thumbnails: {
                medium: { url: thumb('ucl1', 320, 180) },
                default: { url: thumb('ucl1', 120, 90) },
            },
            tags: ['Football', 'Real Madrid', 'Champions League'],
        },
        statistics: {
            viewCount: '22000000',
            likeCount: '890000',
            dislikeCount: '12000',
            commentCount: '68000',
        },
        contentDetails: { duration: 'PT15M40S', videoId: 'v014' },
    },
    {
        id: 'v015',
        snippet: {
            channelId: 'ch_algo',
            channelTitle: 'Algorithm Art',
            title: 'Dijkstra\'s Algorithm — Visualized & Explained',
            description:
                'Step-by-step visualisation of Dijkstra\'s shortest-path algorithm using an interactive canvas. Perfect for interview prep.',
            publishedAt: ago(50),
            thumbnails: {
                medium: { url: thumb('dijkstra1', 320, 180) },
                default: { url: thumb('dijkstra1', 120, 90) },
            },
            tags: ['Algorithm Art', 'Coding', 'use of API'],
        },
        statistics: {
            viewCount: '650000',
            likeCount: '28000',
            dislikeCount: '140',
            commentCount: '560',
        },
        contentDetails: { duration: 'PT19M30S', videoId: 'v015' },
    },
    {
        id: 'v016',
        snippet: {
            channelId: 'ch_webdev',
            channelTitle: 'WebDev Simplified',
            title: 'Build a Full-Stack App with Next.js 14 and Server Actions',
            description:
                'Next.js 14 introduces Server Actions — a paradigm shift in how we handle mutations. We build a full CRUD notes app without an explicit API layer.',
            publishedAt: ago(6),
            thumbnails: {
                medium: { url: thumb('nextjs1', 320, 180) },
                default: { url: thumb('nextjs1', 120, 90) },
            },
            tags: ['React js', 'Coding', 'use of API'],
        },
        statistics: {
            viewCount: '1100000',
            likeCount: '44000',
            dislikeCount: '510',
            commentCount: '2100',
        },
        contentDetails: { duration: 'PT52M18S', videoId: 'v016' },
    },
    {
        id: 'v017',
        snippet: {
            channelId: 'ch_cricket',
            channelTitle: 'Cricket Central',
            title: 'Top 10 Greatest Cricket Catches of All Time',
            description:
                'From Jonty Rhodes to AB de Villiers — we count down the 10 most breathtaking caught dismissals in cricket history.',
            publishedAt: ago(90),
            thumbnails: {
                medium: { url: thumb('catches1', 320, 180) },
                default: { url: thumb('catches1', 120, 90) },
            },
            tags: ['Cricket', 'Sports'],
        },
        statistics: {
            viewCount: '6700000',
            likeCount: '241000',
            dislikeCount: '2800',
            commentCount: '12000',
        },
        contentDetails: { duration: 'PT11M05S', videoId: 'v017' },
    },
    {
        id: 'v018',
        snippet: {
            channelId: 'ch_coding',
            channelTitle: 'Code With Abhishek',
            title: 'Mastering CSS Grid — Build Real Layouts Fast',
            description:
                'CSS Grid is the best layout system available in CSS. We go from basics to advanced techniques building a dashboard, magazine layout and card grid.',
            publishedAt: ago(22),
            thumbnails: {
                medium: { url: thumb('css1', 320, 180) },
                default: { url: thumb('css1', 120, 90) },
            },
            tags: ['Coding', 'CSS'],
        },
        statistics: {
            viewCount: '320000',
            likeCount: '13800',
            dislikeCount: '75',
            commentCount: '380',
        },
        contentDetails: { duration: 'PT27M44S', videoId: 'v018' },
    },
    {
        id: 'v019',
        snippet: {
            channelId: 'ch_react',
            channelTitle: 'React Masters',
            title: 'React Query v5 — Server State Made Simple',
            description:
                'TanStack Query (React Query) v5 is here. We rebuild a complex dashboard replacing all Redux async thunks with useQuery and useMutation.',
            publishedAt: ago(14),
            thumbnails: {
                medium: { url: thumb('reactquery1', 320, 180) },
                default: { url: thumb('reactquery1', 120, 90) },
            },
            tags: ['React js', 'Redux', 'Coding'],
        },
        statistics: {
            viewCount: '490000',
            likeCount: '20400',
            dislikeCount: '112',
            commentCount: '640',
        },
        contentDetails: { duration: 'PT36M00S', videoId: 'v019' },
    },
    {
        id: 'v020',
        snippet: {
            channelId: 'ch_music',
            channelTitle: 'Acoustic Sessions',
            title: 'Thunderstruck — Acoustic Fingerstyle (AC/DC)',
            description:
                'AC/DC\'s iconic Thunderstruck arranged for solo fingerstyle guitar. 6-string only, no effects.',
            publishedAt: ago(30),
            thumbnails: {
                medium: { url: thumb('thunder1', 320, 180) },
                default: { url: thumb('thunder1', 120, 90) },
            },
            tags: ['Guitar', 'Music'],
        },
        statistics: {
            viewCount: '3800000',
            likeCount: '148000',
            dislikeCount: '1100',
            commentCount: '5400',
        },
        contentDetails: { duration: 'PT5M52S', videoId: 'v020' },
    },
    {
        id: 'v021',
        snippet: {
            channelId: 'ch_webdev',
            channelTitle: 'WebDev Simplified',
            title: 'CSS Animations Masterclass — From Basics to 3D',
            description:
                'Everything you need to know about CSS animations: transitions, keyframes, transform, 3D perspective and animation timing functions.',
            publishedAt: ago(45),
            thumbnails: {
                medium: { url: thumb('cssanim1', 320, 180) },
                default: { url: thumb('cssanim1', 120, 90) },
            },
            tags: ['Coding', 'CSS'],
        },
        statistics: {
            viewCount: '760000',
            likeCount: '32000',
            dislikeCount: '220',
            commentCount: '890',
        },
        contentDetails: { duration: 'PT33M14S', videoId: 'v021' },
    },
    {
        id: 'v022',
        snippet: {
            channelId: 'ch_football',
            channelTitle: 'Football Weekly',
            title: 'Ronaldo vs Messi — Career Stats Compared (2024 Update)',
            description:
                'A deep statistical dive comparing Cristiano Ronaldo and Lionel Messi across club and international career goals, assists and trophies.',
            publishedAt: ago(28),
            thumbnails: {
                medium: { url: thumb('ronaldo1', 320, 180) },
                default: { url: thumb('ronaldo1', 120, 90) },
            },
            tags: ['Football', 'Real Madrid'],
        },
        statistics: {
            viewCount: '18000000',
            likeCount: '720000',
            dislikeCount: '28000',
            commentCount: '98000',
        },
        contentDetails: { duration: 'PT17M30S', videoId: 'v022' },
    },
    {
        id: 'v023',
        snippet: {
            channelId: 'ch_algo',
            channelTitle: 'Algorithm Art',
            title: 'Perlin Noise Explained — Generative Landscapes',
            description:
                'Using Perlin noise to generate infinite 2D landscapes, terrain heightmaps and animated clouds entirely in JavaScript.',
            publishedAt: ago(55),
            thumbnails: {
                medium: { url: thumb('perlin1', 320, 180) },
                default: { url: thumb('perlin1', 120, 90) },
            },
            tags: ['Algorithm Art', 'Coding'],
        },
        statistics: {
            viewCount: '410000',
            likeCount: '17200',
            dislikeCount: '62',
            commentCount: '320',
        },
        contentDetails: { duration: 'PT23M45S', videoId: 'v023' },
    },
    {
        id: 'v024',
        snippet: {
            channelId: 'ch_react',
            channelTitle: 'React Masters',
            title: 'React Performance Optimisation — memo, useMemo & useCallback',
            description:
                'Stop unnecessary re-renders. We profile a slow React app with React DevTools and fix it step-by-step using React.memo, useMemo and useCallback.',
            publishedAt: ago(9),
            thumbnails: {
                medium: { url: thumb('perf1', 320, 180) },
                default: { url: thumb('perf1', 120, 90) },
            },
            tags: ['React js', 'Redux', 'Coding'],
        },
        statistics: {
            viewCount: '820000',
            likeCount: '35000',
            dislikeCount: '180',
            commentCount: '1100',
        },
        contentDetails: { duration: 'PT29M12S', videoId: 'v024' },
    },
]

// ---- Playlist → video map (for channel screen) ------------------------------
export const PLAYLIST_MAP = {
    pl_react_uploads: ['v001', 'v007', 'v013', 'v019', 'v024'],
    pl_webdev_uploads: ['v002', 'v010', 'v016', 'v021'],
    pl_music_uploads: ['v004', 'v011', 'v020'],
    pl_algo_uploads: ['v003', 'v009', 'v015', 'v023'],
    pl_cricket_uploads: ['v005', 'v017'],
    pl_football_uploads: ['v006', 'v014', 'v022'],
    pl_coding_uploads: ['v008', 'v012', 'v018'],
}

// ---- Mock Comments ----------------------------------------------------------
const makeComment = (name, text, daysAgo) => ({
    id: `cm_${Math.random().toString(36).slice(2)}`,
    snippet: {
        topLevelComment: {
            snippet: {
                authorDisplayName: name,
                authorProfileImageUrl: avatar(name.replace(/ /g, ''), 40),
                textDisplay: text,
                publishedAt: ago(daysAgo),
                likeCount: Math.floor(Math.random() * 200),
            },
        },
        totalReplyCount: Math.floor(Math.random() * 10),
    },
})

const BASE_COMMENTS = {
    v001: [
        makeComment('Alice Dev', 'Finally a clear explanation of useContext! 🔥', 1),
        makeComment('Bob Coder', 'Great video! The useEffect cleanup part saved me today lol', 2),
        makeComment('Priya Nair', 'Been using React for 2 years and still learned something new here', 3),
        makeComment('Dev Enthusiast', 'Can you do one on custom hooks next?', 4),
    ],
    v002: [
        makeComment('Sam Reduxer', 'RTK Query is game-changing, no more thunks!', 0),
        makeComment('Lena M', 'This finally clicked after 3 different tutorials. Thanks!', 1),
        makeComment('Kiran V', 'Do you have a series on Zustand vs Redux?', 2),
    ],
    v003: [
        makeComment('VisualCoder', 'This is art AND code at the same time 😍', 1),
        makeComment('Algo Fan', 'Bubble sort never looked this beautiful', 3),
    ],
    v004: [
        makeComment('Guitar Lover', 'Fingerings please!! Those are so smooth', 0),
        makeComment('Music Nerd', 'The tone on that guitar is incredible', 1),
        makeComment('John Strummer', 'What guitar are you playing?', 2),
    ],
    v005: [
        makeComment('Cricket Fan', 'Rohit Sharma in beast mode 🏏', 0),
        makeComment('Rahul S', 'The chase was incredible!', 1),
    ],
}

/**
 * Seed key for localStorage
 */
const COMMENTS_STORAGE_KEY = 'vidflix-comments'

/**
 * Returns all comments for a given videoId, merging localStorage and base data.
 */
export const getCommentsForVideo = (videoId) => {
    const stored = JSON.parse(localStorage.getItem(COMMENTS_STORAGE_KEY) || '{}')
    const baseItems = BASE_COMMENTS[videoId] || []
    const storedItems = stored[videoId] || []
    return [...storedItems.reverse(), ...baseItems]
}

/**
 * Persists a new comment to localStorage.
 */
export const saveCommentForVideo = (videoId, authorDisplayName, authorProfileImageUrl, textDisplay) => {
    const stored = JSON.parse(localStorage.getItem(COMMENTS_STORAGE_KEY) || '{}')
    const newComment = makeComment(authorDisplayName, textDisplay, 0)
    newComment.snippet.topLevelComment.snippet.authorProfileImageUrl = authorProfileImageUrl
    stored[videoId] = [newComment, ...(stored[videoId] || [])]
    localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(stored))
    return newComment
}

// ---- Mock Subscriptions -----------------------------------------------------
export const MOCK_SUBSCRIPTIONS = [
    {
        id: 'sub_react',
        kind: 'youtube#subscription',
        snippet: {
            channelId: 'ch_react',
            channelTitle: 'React Masters',
            description: 'Deep-dives into React, hooks and Redux.',
            publishedAt: ago(30),
            resourceId: { channelId: 'ch_react' },
            thumbnails: {
                medium: { url: thumb('react1', 320, 180) },
            },
        },
        contentDetails: {
            totalItemCount: 142,
            newItemCount: 4,
        },
    },
    {
        id: 'sub_webdev',
        kind: 'youtube#subscription',
        snippet: {
            channelId: 'ch_webdev',
            channelTitle: 'WebDev Simplified',
            description: 'Making web development simpler.',
            publishedAt: ago(60),
            resourceId: { channelId: 'ch_webdev' },
            thumbnails: {
                medium: { url: thumb('redux1', 320, 180) },
            },
        },
        contentDetails: {
            totalItemCount: 380,
            newItemCount: 2,
        },
    },
    {
        id: 'sub_algo',
        kind: 'youtube#subscription',
        snippet: {
            channelId: 'ch_algo',
            channelTitle: 'Algorithm Art',
            description: 'Visualizing algorithms with code.',
            publishedAt: ago(90),
            resourceId: { channelId: 'ch_algo' },
            thumbnails: {
                medium: { url: thumb('algo1', 320, 180) },
            },
        },
        contentDetails: {
            totalItemCount: 98,
            newItemCount: 1,
        },
    },
]

// ---- Lookup helpers ---------------------------------------------------------

/** Find a video by its id string */
export const getVideoById = (id) => MOCK_VIDEOS.find((v) => v.id === id) || null

/** Find videos by channelId */
export const getVideosByChannelId = (channelId) =>
    MOCK_VIDEOS.filter((v) => v.snippet.channelId === channelId)

/** Find a channel by id */
export const getChannelById = (id) => MOCK_CHANNELS[id] || null

/** Search videos by keyword (title + description) */
export const searchVideos = (keyword) => {
    const lower = keyword.toLowerCase()
    return MOCK_VIDEOS.filter(
        (v) =>
            v.snippet.title.toLowerCase().includes(lower) ||
            v.snippet.description.toLowerCase().includes(lower) ||
            (v.snippet.tags || []).some((t) => t.toLowerCase().includes(lower))
    )
}

/** Filter by category keyword (same as search but for home screen) */
export const getVideosByCategory = (keyword) => {
    if (keyword === 'All') return MOCK_VIDEOS
    return searchVideos(keyword)
}

/** Return videos related to a given video (same channel or overlapping tags) */
export const getRelatedVideos = (videoId) => {
    const source = getVideoById(videoId)
    if (!source) return MOCK_VIDEOS.slice(0, 15)
    const sourceTags = source.snippet.tags || []
    return MOCK_VIDEOS.filter((v) => {
        if (v.id === videoId) return false
        if (v.snippet.channelId === source.snippet.channelId) return true
        const vTags = v.snippet.tags || []
        return vTags.some((t) => sourceTags.includes(t))
    }).slice(0, 15)
}
