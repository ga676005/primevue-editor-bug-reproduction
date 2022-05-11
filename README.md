# Issue
In production mode, Editor's dropdown stops working when it mounts second time and afterwards.

https://user-images.githubusercontent.com/51456572/167750578-30c91a62-c2d4-473b-8e57-15cd54c9a860.mp4


1. git clone https://github.com/ga676005/primevue-editor-bug-reproduction
2. npm i
3. npm run preview
4. open the page
5. click the toggle button to show `Editor`, notice the dropdown is clickable
6. click the toggle button twice to hide and show `Editor` again, now dropdown is not clickable
