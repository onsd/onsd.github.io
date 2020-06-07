type Article = {
    title: string
    body: string[]
    date: string
    link?: string
}

// return 1 ~ max
const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * Math.floor(max)) + 1
}

const articles: Article[] =[
    {
        title: "KOSENハッカソン",
        body: ["飲食店を検索するAPIを使って、トイレを検索するサービスを作りました","NTTデータ賞、サイボウズ賞をいただきました"],
        date: "2017/11",
        link: "https://onsd.hatenablog.com/entry/2017/11/21/102616"
    },
    {
        title: "鳥羽ハッカソン",
        body: ["端末間の距離に応じてイラストが変化する待ち合わせアプリを徹夜で作りました", "アイ・エス・イー賞を頂きました"],
        date: "2018/03",
        link:"https://onsd.hatenablog.com/entry/2018/03/02/232504"
    },
    {
        title: "KOSENハッカソン",
        body: ["カレンダー系のアプリを作りました", "LINE賞でClovaを頂きました"],
        date: "2018/12",
        // link: "https://mashupawards.connpass.com/event/109314/"
    },
    {
        title: "高専カンファレンス in 名古屋 (お手伝い)",
        body: ["ﾔﾏｹﾞﾝの人脈に100%頼り切った高専カンファレンスのお手伝い"],
        date: "2018/12",
        // link: "https://connpass.com/event/105741/"
    },
    {
        title: "豊田・鈴鹿合同ハッカソン (運営)",
        body: ["12月のKOSENハッカソンで出会った方と意気投合して行ったハッカソン", "それまでハッカソンは出る側だったのでとても楽しかった"],
        date: "2019/03",
        link: "https://onsd.hatenablog.com/entry/2019/03/29/002603"
    },
    {
        title: "危機管理コンテスト",
        body : ["豊田高専からは初参戦","二次予選に進めたものの、応対が難しく一問解いたところで終了"],
        date: "2019/04",
        // link: "http://www.riis.or.jp/symposium23/crisismanagement/"
    },
    {
        title: "高専プログラミングコンテスト",
        body: ["本戦に進めたものの、台風により飛行機が飛ばず不参加", "<a href=\"https://github.com/NITTC-ComputerClub/SeiDoc\">リポジトリ</a>"],
        date: "2019/08",
    },
    {
        title: "U16プロコン愛知大会(主催)",
        body: ["なにかの縁で16歳以下向けのコンテストを主催しました","出てくれた方は楽しそうだったので満足です"],
        date: "2019/12",
        link: "https://onsd.hatenablog.com/entry/2019/12/13/205710"
    },
    {
        title: "SecHack365 (優秀修了生)",
        body: ["表現駆動コースに参加", "大橋くんとWebサービス運用フレームワークを作りました"],
        date: "2019年度"
    },
    {
        title:"危機管理コンテスト",
        body: ["去年のリベンジで本戦に出場できました", "文部科学大臣賞をいただけたので大満足です","来年も本戦行けるよう頑張る && 白浜に行きたい"],
        date: "2020/05",
    }

    
]
const main = () => {
    articles.forEach(item => {
        const color = getRandomInt(6);
        console.log(createArticle(color, item.title, item.body, item.date, item.link))
    })
    
}

const createArticle = (color: number, title:string, body: string[], date:string, link?:string) :string => {
    const b = body.map(i => `<p>${i}</p>`).join('\n')
    if(link){
        return `
            <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div class="timeline-entry-inner">
                    <div class="timeline-icon color-${color}">
                        <i class="icon-pen2"></i>
                    </div>
                    <div class="timeline-label">
                        <h2><a href="${link}}">${title}</a><span>${date}</span></h2>
                        <a href="${link}">ブログ</a>
                        ${b}
                    </div>
                </div>
            </article>
            `
    }else{
        return `
            <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div class="timeline-entry-inner">
                    <div class="timeline-icon color-${color}">
                        <i class="icon-pen2"></i>
                    </div>
                    <div class="timeline-label">
                        <h2><a>${title}</a><span>${date}</span></h2>
                        ${b}
                    </div>
                </div>
            </article>
        `
    }
    
}
main()