bootstrap-drafter
=================

Quickly prototype ideas with Guard, LiveReload, HAML, LESS, and Bootstrap.

cp -r bootstrap-drafter my-new-app
cd my-new-app
bundle exec guard
open draft.html
Activate LiveReload extension.

OR:

Add this function to your `~/.bash_profile`:

function draft(){
  cp -r /Users/jasonbenn/code/bootstrap-drafter $1
  cd $1
  open draft.html
  bundle exec guard
}

To use, enter `draft name-of-app`.