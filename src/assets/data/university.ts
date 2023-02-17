import {programType} from "./programs";

export type universityType = {
    id: number,
    title: string,
    detail: string,
    programs: programType[]
};

const data: universityType[] = [
    {
        id: 1,
        title: 'University of chichester',
        detail: `<p>Audio Player Use Up/Down Arrow keys to increase or decrease volume.
                        Even though Israel is a small country it is always in the
                        news.  The news continues to report on Jews moving to Israel, on
                        the technology invented there, but also on conflict, wars and tensions w
                        ith surrounding people.  Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known, went on a camping trip in that part of the world.  The Bible says that his story affects our future.

                        This ancient man is Abraham (also known as Abram).  We can t
                        ake his story seriously because the places and cities he visited ar
                        e mentioned in other old writings.</p>
                        <p>
                            Most of us wonder if there is a God and if He really is the God of the Bible. In the Bible God says ‘I will make your name great’ and today the name of Abraham/Abram
                            is known worldwide. This promise has come true. The earliest copy of Genesis found in t
                            he Dead Sea Scrolls is dated 200-100 B.C. which means the promise has been in writing since at le
                            ast that time. At that time the name of Abraham was not well-known so the promise came true only afte
                            r it was written down, not before.
                        </p>`,
        programs: [
            {
                id: 1,
                title: '3-D Animation and Game Design - BFA',
                university: {
                    title: 'University of the Incamate Word',
                    location: 'USA'
                },
                type: "Bachelor's",
                duration: 3,
                language: 'English',
                next_intake: 'May 21',
                tuition_fee: 18934,
                application_fee: 354,
                cost_of_living: 2344656,
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>`,
                requirements: `<ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`

            },
            {
                id: 2,
                title: '5-D Animation and Game Design - BFA',
                university: {
                    title: 'University of chichester',
                    location: 'chichester, UK'
                },
                type: "Bachelor's",
                duration: 4,
                language: 'English',
                next_intake: 'May 21',
                tuition_fee: 46767,
                application_fee: 100,
                cost_of_living: 456789,
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>`,
                requirements: `<ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`

            },
            {
                id: 3,
                title: 'Master of Arts - UX/UI Design and Development',
                university: {
                    title: 'University of chichester',
                    location: 'chichester, UK'
                },
                type: "Bachelor's",
                duration: 4,
                language: 'English',
                next_intake: 'May 21',
                tuition_fee: 46767,
                application_fee: 100,
                cost_of_living: 456789,
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>`,
                requirements: `<ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`

            }
        ]
    }
]

export default data;
