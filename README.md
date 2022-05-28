# Issue
In production mode, Editor's dropdown stops working when it mounts second time and afterwards.

[netlify demo](https://627b815fb6efcf54792e9b00--splendid-tulumba-1cb97b.netlify.app/)


https://user-images.githubusercontent.com/51456572/167750578-30c91a62-c2d4-473b-8e57-15cd54c9a860.mp4


1. git clone https://github.com/ga676005/primevue-editor-bug-reproduction
2. npm i
3. npm run build
4. npm run preview
5. open the page
6. click the toggle button to show `Editor`, notice the dropdown is clickable
7. click the toggle button twice to hide and show `Editor` again, now dropdown is not clickable
