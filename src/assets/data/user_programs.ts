export type userProgramType = {
    id: number,
    title: string,
    university: string,
    estart_date: string,
    start_date: string,
    fee: number,
    status: string,
    requirements: string,
    other_fee: string
};


const data: userProgramType[] = [
    {
        id: 2345,
        title: 'Bachelor of Design - Environmental Design - Interior Design',
        university: 'OCADO University',
        estart_date: 'September 2023',
        start_date: 'September 2023',
        fee: 2345,
        status: 'unpaid',
        requirements: `<h6>Admission Requirement</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>
                    <ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`,
        other_fee: `<p>- Health Insurance Fee: $234,64 per year</p>
                    <p>- U-Pass fee: $892 per year</p>
                    <p>- Athletics Fee: $234 per year</p>
                    <p>- CUSA Insurance Fee: $8923 per year.</p>
                    <p>- Student Association Fee: $500 per year.</p>`
    },
    {
        id: 7643,
        title: 'Bachelor of Design - Environmental Design - Interior Design',
        university: 'OCAD University',
        estart_date: 'September 2022',
        start_date: 'September 2022',
        fee: 4500,
        status: 'unpaid',
        requirements: `
                    <h6>Admission Requirement</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>
                    <ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`,
        other_fee: `<p>- Health Insurance Fee: $234,64 per year</p>
                    <p>- U-Pass fee: $892 per year</p>
                    <p>- Athletics Fee: $234 per year</p>
                    <p>- CUSA Insurance Fee: $8923 per year.</p>
                    <p>- Student Association Fee: $500 per year.</p>`
    },
    {
        id: 23489,
        title: 'Bachelor of Science',
        university: 'OCADD University',
        estart_date: 'September 2021',
        start_date: 'September 2021',
        fee: 6999,
        status: 'approved',
        requirements: `
<h6>Admission Requirement</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>
                    <ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`,
        other_fee: `<p>- Health Insurance Fee: $234,64 per year</p>
                    <p>- U-Pass fee: $892 per year</p>
                    <p>- Athletics Fee: $234 per year</p>
                    <p>- CUSA Insurance Fee: $8923 per year.</p>
                    <p>- Student Association Fee: $500 per year.</p>`
    },
    {
        id: 108962,
        title: 'Master of Design - Environmental Design - Interior Design',
        university: 'OCADI University',
        estart_date: 'September 2022',
        start_date: 'September 2022',
        fee: 5000,
        status: 'approved',
        requirements: `<h6>Admission Requirement</h6>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lorem odio. Nam egestas turpis vestibulum est iaculis, quis pulvinar nulla ultricies. Vivamus venenatis odio sit amet libero scelerisque, vel euismod metus malesuada. Sed tempor urna metus, in placerat leo sollicitudin ut. Sed euismod luctus metus, nec eleifend neque consequat vitae. Cras consectetur libero vel justo pharetra, in mollis arcu hendrerit. Donec a eros enim. In ac fringilla mauris. Pellentesque et augue tincidunt, sollicitudin neque a, interdum mi. Proin imperdiet, ipsum sed consectetur mollis, mauris nulla varius ipsum, ut vulputate elit eros quis augue. Curabitur ultricies iaculis nulla nec volutpat.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna in tortor semper mollis nec nec eros. Nunc dignissim dolor eget nibh tempor congue. Proin ultricies luctus imperdiet. Nam maximus metus eu tellus auctor tristique. Curabitur dignissim, turpis ac efficitur gravida, tortor odio elementum est, vestibulum rutrum purus mi vel libero. Curabitur at eros imperdiet, porttitor nibh non, interdum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus posuere sed erat sit amet egestas. Quisque vestibulum sapien risus, a pharetra nisi sollicitudin in. Suspendisse fermentum nisi ut convallis aliquam. Nullam consectetur augue in turpis cursus, a lacinia purus hendrerit.</p>
                    <p>Nulla facilisi. Nulla et convallis diam, sit amet imperdiet orci. Phasellus ac urna</p>
                    <ul>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                        <li>Phasellus ac urna in tortor semper mollis nec nec eros.</li>
                    </ul>
                    <ul>
                        <li>CGPA 3.4</li>
                        <li>Marks 90%</li>
                        <li>BS Degree 4 years</li>
                        <li>So on....</li>
                    </ul>`,
        other_fee: `<p>- Health Insurance Fee: $234,64 per year</p>
                    <p>- U-Pass fee: $892 per year</p>
                    <p>- Athletics Fee: $234 per year</p>
                    <p>- CUSA Insurance Fee: $8923 per year.</p>
                    <p>- Student Association Fee: $500 per year.</p>`
    }
];

export default data;
