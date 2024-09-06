import Page from '../../components/Page';
import Blog from '../../components/Blog';
import BlogTitle from '../../components/BlogTitle';
import MockUpCode from '../../components/MockUpCode';

export default function Week6(){
    return (
        <>
            <Page>
                <BlogTitle
                    title="Assignments: 2024-09-06"
                    description="Task 1: Since ESPHome is a Python-based tool, you can use Windows, Ubuntu, or macOS as your development platform.  "
                />
                <MockUpCode>
                    <pre data-prefix=">"><code>python3 -m venv esphome/venv</code></pre>
                    <pre data-prefix=">"><code>source esphome/venv/bin/activate</code></pre>
                    <pre data-prefix=">"><code>pip3 install -U esphome</code></pre>
                    <pre data-prefix=">"><code>pip3 install -U esptool</code></pre>
                </MockUpCode>

                <MockUpCode>
                    <pre data-prefix=">"><code>esphome –version</code></pre>
                    <pre data-prefix=">"><code>esptool.py version</code></pre>
                </MockUpCode>

                <MockUpCode>
                    <pre data-prefix=">"><code>esphome compile esp32-demo.yaml</code></pre>
                </MockUpCode>

                <MockUpCode>
                    <pre data-prefix=">"><code>esptool.py erase_flash</code></pre>
                </MockUpCode>

                <MockUpCode>
                    <pre data-prefix=">"><code>esptool.py --after hard_reset write_flash --flash_mode qio 0x0 .esphome/build/esp32-demo/.pioenvs/esp32-demo/firmware.factory.bin</code></pre>
                </MockUpCode>
            </Page>
        </>
    )
}