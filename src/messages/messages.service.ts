import { MessagesRepository } from './messages.repository';

export class MessagesService {

    messagesRepo: MessagesRepository;

    constructor(){
        // Servive is creating its own dependencies
        // DO NOT DO THIS ON REAL APPS
        this.messagesRepo = new MessagesRepository()
    }

    async findOne(id: string) {
       return this.messagesRepo.findOne(id)
    }

    async findAll() {
        return this.messagesRepo.findAll()
    }

    async create(content: string) {
        return this.messagesRepo.create(content)
    }
}