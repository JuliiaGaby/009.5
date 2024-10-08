const url = 'https://raw.githubusercontent.com/JuliiaGaby/main/api/global-data.json';

async function visualizeGlobalInformation() {
    const res = await fetch(url);
    const data = await res.json();
    const connectedPeople = (data.total_connected_people / 1e9);
    const worldPopulation = (data.total_people_world / 1e9);
    const hours = parseInt(data.average_time);
    const minutes = Math.round((data.average_time - hours) * 100);
    const connectedPercentage = ((connectedPeople / worldPopulation) * 100).toFixed(2);

    const paragraph = document.createElement('p');
    paragraph.classList.add('charts-container__text');
    paragraph.innerHTML = `Did you know that the world has <span>${worldPopulation} billion</span> people and that approximately <span>${connectedPeople} billion</span> are connected to some social network and spend on average <span>${hours} hours</span> and <span>${minutes} minutes</span> connected.<br>This means that approximately <span>${connectedPercentage}%</span> of people are connected to some social network.`;

    const container = document.getElementById('charts-container');
    container.appendChild(paragraph);
}

visualizeGlobalInformation();
