import templateUrl from './book.html';

export const bookComponent = {
    bindings: {
        book: '<',
        isPreview: '<',
        isSaved: '<',
        onSave: '&',
        onRemove: '&'
    },
    templateUrl,
    controller: class BookComponent{
        $onInit() {
            this.isPreview = (typeof this.isPreview === 'undefined') ? false : this.isPreview;
            
            if (typeof this.allowAdd === 'undefined') {
                this.allowAdd = this.isPreview ? true : false;
            }
        }

        getBookImage() {
            if (!this.book.volumeInfo.imageLinks) {
                return null;
            }

            const imageLinkName = this.isPreview ? 'smallThumbnail' : 'thumbnail';
            return this.book.volumeInfo.imageLinks[imageLinkName] || null;
        }

        getTitle() {
            let title = this.book.volumeInfo.title;

            if (this.isPreview && title.length > 40) {
                title = `${title.slice(0, 40)}...`;
            }

            return title;
        }

        addBook(event) {
            event.preventDefault();
            
            this.onSave({
                $event: {
                    book: this.book
                }
            });
        }

        removeBook(event) {
            event.preventDefault();

            this.onRemove({
                $event: {
                    book: this.book
                }
            });
        }
    }
};