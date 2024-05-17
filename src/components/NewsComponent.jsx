// NewsComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './SideBar';





const NewsComponent = () => {
    const [news, setNews] = useState([]);
    const [sample, setSample] = useState('general');


    // const article = [
    //     {
    //       title: 'Sample News Title 1',
    //       description: 'This is a sample description for news article 1.',
    //       urlToImage: 'https://via.placeholder.com/150',
    //       url: 'https://example.com/news1',
    //     },
    //     {
    //       title: 'Sample News Title 2',
    //       description: 'This is a sample description for news article 2.',
    //       urlToImage: 'https://via.placeholder.com/150',
    //       url: 'https://example.com/news2',
    //     },
    //     {
    //       title: 'Sample News Title 3',
    //       description: 'This is a sample description for news article 3.',
    //       urlToImage: 'https://via.placeholder.com/150',
    //       url: 'https://example.com/news3',
    //     },
    //     {
    //       title: 'Sample News Title 4',
    //       description: 'This is a sample description for news article 4.',
    //       urlToImage: 'https://via.placeholder.com/150',
    //       url: 'https://example.com/news4',
    //     },{
    //         "source": {"id": "bbc-sport", "name": "BBC Sport"},
    //         "author": "BBC Sport",
    //         "title": "Shane Warne memorial - watch & follow updates",
    //         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
    //         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
    //         "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
    //         "publishedAt": "2022-03-30T08:22:26.498888Z",
    //         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    //     },
    //     {
    //         "source": {"id": "espn-cric-info", "name": "ESPN Cric Info"},
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {"id": "espn-cric-info", "name": "ESPN Cric Info"},
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    
    //   ]




    


    useEffect(() => {
        const fetchData = async () => {
            try {


                const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${sample}/in.json`);
                setNews(response.data.articles);
                
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    },[sample]);





    //////////////no fetch working

    //  useEffect(()=>{

    //     setNews(article)

    //  },[sample])


    function changeSamplefun(e) {
        setSample(e)  
    }
console.log(news,"dg");
console.log(sample,"sample")

    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <Sidebar  sampleChanege={changeSamplefun} />
                <div className="news-container">
                    {news.map((article, index) => (
                        <div className="card" key={index}>
                            <img className='news-image' src={article.urlToImage} alt={article.title} />
                            <h2 className='news-title'>{article.title}</h2>
                            {/* <h3 className='news-author'>By: {article.author || article.source.name}</h3> */}
                            <p className='news-description'>{article.description}</p>
                            <a className='news-link' href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsComponent;
