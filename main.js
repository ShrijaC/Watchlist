window.addEventListener('load', () => {
	const form = document.querySelector("#newlistform");
	const input = document.querySelector("#newlistinput");
	const list_el = document.querySelector("#lists");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const wlist = input.value;

        const wlist_el = document.createElement('div');
		wlist_el.classList.add('list');

		const wlist_content_el = document.createElement('div');
		wlist_content_el.classList.add('content');

		wlist_el.appendChild(wlist_content_el);

		const wlist_input_el = document.createElement('input');
		wlist_input_el.classList.add('text');
		wlist_input_el.type = 'text';
		wlist_input_el.value = wlist;
		wlist_input_el.setAttribute('readonly', 'readonly');

		wlist_content_el.appendChild(wlist_input_el);

		const wlist_actions_el = document.createElement('div');
		wlist_actions_el.classList.add('actions');

        const wlist_strike_el = document.createElement('button');
		wlist_strike_el.classList.add('to_watch');
		wlist_strike_el.innerText = 'To Watch';		

        const wlist_edit_el = document.createElement('button');
		wlist_edit_el.classList.add('edit');
		wlist_edit_el.innerText = 'Edit';

		const wlist_delete_el = document.createElement('button');
		wlist_delete_el.classList.add('delete');
		wlist_delete_el.innerText = 'Delete';

		wlist_actions_el.appendChild(wlist_strike_el);
		wlist_actions_el.appendChild(wlist_edit_el);
		wlist_actions_el.appendChild(wlist_delete_el);

		wlist_el.appendChild(wlist_actions_el);

		list_el.appendChild(wlist_el);

		input.value = '';

        wlist_strike_el.addEventListener('click', (e) => {
			if (wlist_strike_el.innerText.toLowerCase() == "to watch") {
                wlist_strike_el.innerText = "Watched";
				wlist_input_el.setAttribute("readonly", "readonly");
				e.target.style.color = 'green';
			} else {
				wlist_strike_el.innerText = "to watch";
                wlist_input_el.focus();
				wlist_input_el.setAttribute("readonly", "readonly");
				e.target.style.color = '#ffb3ec';
			}
			
		});

        wlist_edit_el.addEventListener('click', (e) => {
			if (wlist_edit_el.innerText.toLowerCase() == "edit") {
				wlist_edit_el.innerText = "Save";
				wlist_input_el.removeAttribute("readonly");
				wlist_input_el.focus();
			} else {
				wlist_edit_el.innerText = "Edit";
				wlist_input_el.setAttribute("readonly", "readonly");
			}
		});

		wlist_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(wlist_el);
		});
	});
});

function validateForm() {
    var name =document.forms.newlistform.newlistinput.value;
    if (name == "") {
      window.alert("List cannot be empty!");
      newlistinput.focus();
      return false;
    }
    return true;
  }