#!/bin/sh -e

_VERSION="${RUBY_VERSION:-"2.7.0"}"
_GEMSET="${RUBY_GEMSET:-"scaleit"}"

sudo apt-get --assume-yes install gpg
sudo apt-get --assume-yes install software-properties-common
sudo apt-add-repository --assume-yes ppa:rael-gc/rvm
sudo apt-get update
sudo apt-get install --assume-yes rvm
rvm install "ruby-${_VERSION}"
rvm gemset create "${_GEMSET}"
rvm --rvmrc "ruby-${_VERSION}@${_GEMSET}"
rvm rvmrc trust
rvm rvmrc to ruby-version
bundle update --bundler
