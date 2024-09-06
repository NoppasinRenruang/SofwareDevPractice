import Blog from '../../components/Blog';
import BlogTitle from '../../components/BlogTitle';
import MockUpCode from '../../components/MockUpCode';

import Page from '../../components/Page'

export default function Week1(){
    return (
        <>
            <Page>
                <BlogTitle
                    title="Assignments: 2024-07-02"
                    description="Task 1: ... "
                />
                <MockUpCode>
                    <pre data-prefix=">"><code>SomeCode...</code></pre>
                </MockUpCode>
            </Page>
        </>
    )
}