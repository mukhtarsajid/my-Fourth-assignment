 function switchTab(tab){

  const allContainer = document.getElementById('all-container');
  const interviewContainer = document.getElementById('interview-container');
  const rejectedContainer = document.getElementById('rejected-container');

  const tabs = ['all','interview','rejected'];

  const containers = [allContainer, interviewContainer, rejectedContainer];

  for(t of tabs){

    const tabName = document.getElementById('tab-' + t);
    tabName.classList.remove('active');

    if(t === tab){
      tabName.classList.add('active');
    }
  }

  for (const section of containers) {
    section.classList.add('hidden');
  }

  if(tab == 'all'){
    allContainer.classList.remove('hidden');
  }
  else if(tab == 'interview'){
    interviewContainer.classList.remove('hidden');
  }
  else{
    rejectedContainer.classList.remove('hidden');
  }

}

// sat-update
const totalStat = document.getElementById('stat-total');
const interviewStat = document.getElementById('stat-interview');
const rejectedStat = document.getElementById('stat-rejected')

totalStat.innerText = allContainer.children.length;

document.getElementById('job-container').addEventListener('click', function(event){
  const clickedElement = event.target;
  if (clickedElement.classList.contains("interview")) { console.log("interview clicked");

}

if (clickedElement.classList.contains("rejected")) { console.log("rejected clicked");

} 

if (clickedElement.classList.contains("delete")) { console.log("delete clicked");

}

});