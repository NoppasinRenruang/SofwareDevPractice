import NavBar from '../../components/NavBar';
import Blog from '../../components/Blog';
import BlogTitle from '../../components/BlogTitle';
import Task1_11 from '../../images/week2/Task1_11.png';
import Task1_12 from '../../images/week2/Task1_12.png';
import Task1_13 from '../../images/week2/Task1_13.png';
import Task1_14 from '../../images/week2/Task1_14.png';
import Task1_15 from '../../images/week2/Task1_15.png';
import Task1_16 from '../../images/week2/Task1_16.png';

import Task2_21 from '../../images/week2/Task2_21.png';
import Task2_22 from '../../images/week2/Task2_22.png';
import Task2_23 from '../../images/week2/Task2_23.png';
import Task2_24 from '../../images/week2/Task2_24.png';
import Task2_25 from '../../images/week2/Task2_25.png';
import Task2_26 from '../../images/week2/Task2_26.png';

export default function Week2() {
    return (
        <>
            <NavBar></NavBar>
            <BlogTitle
                title="Assignments: 2024-07-12"
                description="Task 1: Installation of Arduino IDE software on an Ubuntu VM "
            />
            <Blog
                title="Task 1"
                description="1.1 Install the Arduino IDE on the Ubuntu VM"
                imageUrl={Task1_11}
                date="18 Aug 2024"
                categoryTitle="Installation"
            />
            <Blog
                title="Task 1"
                description="1.2 Open the Arduino IDE and open the Blink sketch from the Arduino Examples"
                imageUrl={Task1_12}
                date="18 Aug 2024"
                categoryTitle="Open the Arduino IDE"
            />
            <Blog
                title="Task 1"
                description="1.3 Select an Arduino board as the target, such as Arduino Uno or Nano."
                imageUrl={Task1_13}
                date="18 Aug 2024"
                categoryTitle="Select an Arduino board"
            />
            <Blog
                title="Task 1"
                description="1.4 Build the Arduino sketch example."
                imageUrl={Task1_14}
                date="18 Aug 2024"
                categoryTitle="Build the Arduino sketch"
            />
            <Blog
                title="Task 1"
                description="1.5 Select the serial port corresponding to the attached Arduino board."
                imageUrl={Task1_15}
                date="18 Aug 2024"
                categoryTitle="Select the serial port"
            />
            <Blog
                title="Task 1"
                description="1.6 Upload the compiled Arduino sketch to the Arduino board."
                imageUrl={Task1_16}
                date="18 Aug 2024"
                categoryTitle="Upload"
            />

            <BlogTitle
                title="Assignments: 2024-07-12"
                description="Task 2: Installation of VS Code IDE software and extensions"
            />

            <Blog
                title="Task 2"
                description="2.1 Install VS Code IDE for Windows (Host OS)."
                imageUrl={Task2_21}
                date="18 Aug 2024"
                categoryTitle="Installation"
            />
            <Blog
                title="Task 2"
                description="2.2 Install the Remote Development Extension Pack for VS Code IDE."
                imageUrl={Task2_22}
                date="18 Aug 2024"
                categoryTitle="Installation"
            />
            <Blog
                title="Task 2"
                description="2.3 Connect VS Code to the remote machine (Ubuntu)."
                imageUrl={Task2_23}
                date="18 Aug 2024"
                categoryTitle="Connecting"
            />
            <Blog
                title="Task 2"
                description="2.4 Install the PlatformIO extension for Remote Development."
                imageUrl={Task2_24}
                date="18 Aug 2024"
                categoryTitle="Installation"
            />
            <Blog
                title="Task 2"
                description="2.5 Create a project using PlatformIO and the Arduino framework."
                imageUrl={Task2_25}
                date="18 Aug 2024"
                categoryTitle="Create"
            />
            <Blog
                title="Task 2"
                description="2.6 Build the Arduino sketch and upload it to the target."
                imageUrl={Task2_26}
                date="18 Aug 2024"
                categoryTitle="Upload"
            />
        </>
    );
}
