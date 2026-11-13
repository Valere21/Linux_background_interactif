cmake_minimum_required(VERSION 3.21)
project(LinuxBackgroundInteractif VERSION 1.0 LANGUAGES CXX)
find_package(Qt6 6.11 REQUIRED COMPONENTS Quick)
install(DIRECTORY plugin/ DESTINATION share/plasma/wallpapers/org.don404.linuxhierarchy.panel)
