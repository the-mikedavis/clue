#! /bin/sh

# from https://stackoverflow.com/a/246128/7232773
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "In directory: $dir with user $(whoami)"
cronscript="$dir/delta_import.sh"
echo "Delta importing script: $cronscript"

if ! crontab -l | grep 'delta_import.sh' > /dev/null; then
  echo "No prior delta-import cron command found."
else
  echo "Removing old cron command."
fi

# and https://stackoverflow.com/a/9084788/7232773
tmpcron=${TMPDIR:-/tmp}/xyz.$$
trap "rm -f $tmpcron; exit 1" 0 1 2 3 13 15
crontab -l | sed '/delta_import.sh/d' > $tmpcron
echo "0 * * * * $cronscript" >> $tmpcron
crontab < $tmpcron
rm -f $tmp
trap 0

echo "New delta-import command installed."
