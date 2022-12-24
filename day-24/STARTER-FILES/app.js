const data = [
    {
        id: 1,
        name: 'Cameron Williamson',
        email: 'cameron.wiliamson@example.com',
        title: 'Software Developer'
    },
    {
        id: 2,
        name: 'Jenny Wilson',
        email: 'jenny.wilson@example.com',
        title: 'Project Manager'
    },
    {
        id: 3,
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        title: 'Marketing Coordinator'
    },
    {
        id: 4,
        name: 'Wade Warren',
        email: 'wade.warren@example.com',
        title: 'Software Tester'
    },
    {
        id: 5,
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        title: 'Web Designer'
    },
    {
        id: 6,
        name: 'Kristin Watson',
        email: 'kristin.watson@example.com',
        title: 'Marketing Coordinator'
    },
    {
        id: 7,
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        title: 'Web Designer'
    },
    {
        id: 8,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 9,
        name: 'Ralph Edwards',
        email: 'ralph.edwards@example.com',
        title: 'Software Tester'
    },
    {
        id: 10,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 11,
        name: 'Willie Jennings',
        email: 'willie.jennings@example.com',
        title: 'Team Leader'
    },
    {
        id: 12,
        name: 'Neveah Simmons',
        email: 'neveah.simmons@example.com',
        title: 'Team Leader'
    },
    {
        id: 13,
        name: 'Theresa Webb',
        email: 'theresa.webb@example.com',
        title: 'Software Tester'
    },
    {
        id: 14,
        name: 'Debbe Baker',
        email: 'debbe.baker@example.com',
        title: 'Software Developer'
    },
    {
        id: 15,
        name: 'Ronald Richards',
        email: 'ronald.richards@example.com',
        title: 'Software Developer'
    },
    {
        id: 16,
        name: 'Deanna Curtis',
        email: 'deanna.curtis@example.com',
        title: 'Scrum Master'
    },
    {
        id: 17,
        name: 'Felicia Reid',
        email: 'felicia.reed@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 18,
        name: 'Jessie Alexander',
        email: 'jessie.alexander@example.com',
        title: 'Project Manager'
    },
    {
        id: 19,
        name: 'Sam Smith',
        email: 'sam.smith@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 20,
        name: 'Eleanor Rigby',
        email: 'eleanor.rigby@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 21,
        name: 'Devon Lane',
        email: 'devon.lane@example.com',
        title: 'Team Leader'
    },
    {
        id: 22,
        name: 'Guy Hawkins',
        email: 'guy.hawkins@example.com',
        title: 'Team Leader'
    },
    {
        id: 23,
        name: 'Jim Parks',
        email: 'jim.parks@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 24,
        name: 'Susanne Ford',
        email: 'susanne.ford@example.com',
        title: 'Software Developer Manager'
    },
    {
        id: 25,
        name: 'Kathryn Murphy',
        email: 'kathryn.murphy@example.com',
        title: 'Project Manager'
    },
    {
        id: 26,
        name: 'Cody Fisher',
        email: 'cody.fisher@example.com',
        title: 'Software Developer'
    },
    {
        id: 27,
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        title: 'Software Tester'
    },
    {
        id: 28,
        name: 'Karen MacAfee',
        email: 'karen.macafee@example.com',
        title: 'UI/UX Designer'
    },
    {
        id: 29,
        name: 'Dianne Russell',
        email: 'dianne.russell@example.com',
        title: 'Ethical Hacker'
    },
    {
        id: 30,
        name: 'Bessie Cooper',
        email: 'bessie.cooper@example.com',
        title: 'Scrum Master'
    },
]

const table = document.getElementsByTagName('table')[0];
const tableHeaderRowIcon = Array.from(document.querySelectorAll('.wrapper table thead tr th button svg'));
const tableRow = document.querySelector('.wrapper table tbody');
const keys = Object.keys(data[0])

visualViewport.addEventListener('resize', ({target}) => {
  console.log(target.width)
  target.width < 960 ? table.classList.add('display-none') : table.classList.remove('display-none');
})

let records = data.slice(0, 10);

tableHeaderRowIcon.forEach((v, i) => {
  tableHeaderRowIcon[i].addEventListener('click', ({target}) => {
    const btn = target.closest('button');
    if (btn.classList.length === 1 || btn.classList.contains('descending')) {
      btn.classList.remove('descending')
      btn.classList.add('ascending')
    } else {
      btn.classList.remove('ascending')
      btn.classList.add('descending')
    }
    const currentKey = keys[i];
    records.sort((a, b) => {
      if (typeof a[currentKey] === 'string') {
        if (btn.classList.contains('ascending')) {
          return a[currentKey].localeCompare(b[currentKey]);
        } else if (btn.classList.contains('descending')) {
          return b[currentKey].localeCompare(a[currentKey]);
        }
      }
      if (typeof a[currentKey] === 'number') {
        if (btn.classList.contains('ascending')) {
          return a[currentKey] - b[currentKey]
        } else if (btn.classList.contains('descending')) {
          return b[currentKey] - a[currentKey]
        } 
      }
    })
    tableRow.innerHTML = '';
    displayRecords();
  });
})
// pagination management
const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');
const currentPageInput = document.querySelector('#currentPage');

let totalResults = data.length;
let currentPage = 1;
let startingRecordCount = 10;

if (currentPage === 1) {
  currentPageInput.setAttribute('readonly', '')
}

nextBtn.addEventListener('click', ({target}) => {
  records = data.slice(startingRecordCount, startingRecordCount + 10);
  if (startingRecordCount >= data.length || currentPage === 3) {
    target.style.cursor = 'not-allowed';
    return;
  }
  tableRow.innerHTML = '';
  displayRecords();
  startingRecordCount += 10;
  currentPage++;
  currentPageInput.value = currentPage;
})

previousBtn.addEventListener('click', ({target}) => {
  startingRecordCount -= 10;
  records = data.slice(startingRecordCount - 10, startingRecordCount);
  if (startingRecordCount === 0) {
    target.style.cursor = 'not-allowed';
    return;
  } else {
    currentPageInput.removeAttribute('readonly')
    target.style.cursor = '';
  }
  tableRow.innerHTML = '';
  displayRecords();
  currentPage--;
  currentPageInput.value = currentPage;
})

displayRecords();

function displayRecords() {
  records.forEach(({id, name, email, title}, i) => {
    tableRow.insertAdjacentHTML('beforeend', `
      <!-- 👇🏻 ADD A CLASS OF EDIT, IF YOU TO DISPLAY THE FORM FIELDS 👇🏻 -->
      <tr>
        <td>${id}</td>
        <td class="name">
          <input type="text" disabled="disabled" name="person-name-1" value="${name}" />
        </td>
        <td>
          <input type="text" disabled="disabled" name="person-email-1" value="${email}" />
        </td>
        <td>
          <input type="text" disabled="disabled" name="person-title-1" value="${title}" />
        </td>
        <td>
          <button class="update" name="person-update-${id}" id="personUpdate${id}">
            <img src="./images/update.svg" alt="Update" class="update" />
          </button>
          <button class="edit" name="person-edit-${id}" id="personEdit${id}">
            <img src="./images/edit.svg" alt="Edit" class="edit" />
          </button>
        </td>
      </tr>`
    )
  });
}

