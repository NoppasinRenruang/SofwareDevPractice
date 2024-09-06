import Page from '../../components/Page';
import Blog from '../../components/Blog';
import BlogTitle from '../../components/BlogTitle';
import MockUpCode from '../../components/MockUpCode';

export default function Week3(){
    return (
        <>
            <Page>
                <BlogTitle
                    title="Assignments: 2024-08-02"
                    description="Task 1: Cross Compilation "
                />
                <MockUpCode>
                    <pre data-prefix=">"><code>SomeCode...</code></pre>
                </MockUpCode>
            </Page>
        </>
    )
}